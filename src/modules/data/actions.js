import { createAction, createThunkAction } from 'vizzuality-redux-tools';

import WRIService from 'services/wri-service';
import processCountry from 'utils/process-country';

import { INDICATORS } from 'services/wri-service/constants';
import { SCOPE } from 'modules/dashboard/constants';

import {
  setCountries,
  // setCountryValue,
  setIndicators,
  setIndicatorValue,
  setWidgetData
} from 'modules/dashboard/actions';

export const setCountriesData = createAction('DATA/setCountriesData');

/**
 * A NOTE on DATA actions
 * Initialize dashboard, we need to do it in the following order:
 * 1. Load indicators, for now they are static, but they should be fetched from a service.
 * 2. Load countries, indicators are needed, because not all data is available for all countries.
 *    If the indicator changes chances are countries list will change.
 */

 export const loadDashboardData = createThunkAction('DATA/loadDashboardData', () => dispatch => {
  dispatch(getIndicators());
  dispatch(getWidgetData()).then(data => {
    const countries4widget = Object.entries(data).map(entry => processCountry(entry[0], entry[1]));
    dispatch(setWidgetData({data: countries4widget}));
  });
});

export const getIndicators = createThunkAction('DATA/getIndicators', () => dispatch => {
  // todo: use a service
  dispatch(setIndicators({data: INDICATORS}))
  dispatch(setIndicatorValue({data: INDICATORS[0].value}));
});

export const getWidgetData = createThunkAction('DATA/getWidgetData', () => async (dispatch, state) => {
  const dashboard = state().dashboard;
  const { scope, locationId, indicators: { value: indicator }} = dashboard;
  
  if (!indicator) return;

  const widgetIds = {
    [SCOPE.GENERAL]: 'e6e5d286-212b-48d8-b5f4-1678cded82bc',
    [SCOPE.COUNTRY]: '4b3d6e89-869c-45b6-88e3-28735d2b60fe'
  };

  const params = { indicator };

  if (scope === SCOPE.COUNTRY) {
    params.iso = locationId;
  }

  const options = {
    widget: {
      id: widgetIds[scope],
      params
    },
    indexKey: (scope === SCOPE.GENERAL) ? 'iso' : 'province'
  };

  return await WRIService.fetchDatasetWidgets(options)
  .then(res => {
    const countries = Object.entries(res).map(
      country => ({
        label: country[1][0].country,
        value: country[0],
      })
    );
    dispatch(setCountries({data: countries}));
    dispatch(setCountriesData({data: res}));
    return res;
  })
  .catch((err) => {
    // dispatch(setError(err));
    // dispatch(setLoading(false));
  });
});



export default {
  getIndicators,
  getWidgetData
};
