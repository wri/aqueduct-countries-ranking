import { createAction, createThunkAction } from 'vizzuality-redux-tools';

import WRIService from 'services/wri-service';
import processLocation from 'utils/process-location';

import { INDICATORS } from 'services/wri-service/constants';

import { setCountry } from 'modules/app/actions';

import {
  setCountries,
  // setCountryValue,
  setIndicators,
  setIndicatorValue,
  setWidgetData,
  setWidgetStats
} from 'modules/dashboard/actions';

export const setCountriesData = createAction('DATA/setCountriesData');

/**
 * A NOTE on DATA actions
 * Initialize dashboard, we need to do it in the following order:
 * 1. Load indicators, for now they are static, but they should be fetched from a service.
 * 2. Load countries, indicators are needed, because not all data is available for all countries.
 *    If the indicator changes chances are countries list will change.
 */

 export const loadDashboardData = createThunkAction('DATA/loadDashboardData', () => (dispatch, state) => {
  const { router } = state();
  const { country, indicator } = router.query || {};

  dispatch(getIndicators());

  if (indicator) {
    dispatch(setIndicatorValue({data: indicator}));
  }

  dispatch(getCountriesData()).then(data => {
    const countries4widget = Object.entries(data)
      .filter(entry => entry[0] !== '_stats')
      .map(entry => processLocation(entry[0], entry[1]));

    if (country) {
      dispatch(setCountry({data: country.toUpperCase()}));
    } else {
      dispatch(setWidgetStats({data: data._stats}));
      dispatch(setWidgetData({data: countries4widget}));
    }
  });
});

export const getIndicators = createThunkAction('DATA/getIndicators', () => dispatch => {
  // todo: use a service
  dispatch(setIndicators({data: INDICATORS}))
  dispatch(setIndicatorValue({data: INDICATORS[0].value}));
});

export const getCountriesData = createThunkAction('DATA/getCountriesData', () => async (dispatch, state) => {
  const dashboard = state().dashboard;
  const { indicators: { value: indicator }} = dashboard;
  
  if (!indicator) return;

  const options = {
    widget: {
      id: 'e6e5d286-212b-48d8-b5f4-1678cded82bc',
      params: { indicator }
    },
    indexKey: 'iso'
  };

  return await WRIService.fetchDatasetWidgets(options)
  .then(res => {
    const countries = Object.entries(res)
      .filter(entry => entry[0] !== '_stats')
      .map(
        country => ({
          label: country[1][0].country,
          value: country[0],
        })
      ).sort((a,b) => {
        if (a.label && b.label) {
          return a.label.localeCompare(b.label);
        }
  
        return -1;
      });

    dispatch(setCountries({data: countries}));
    // These will be used for Country headers
    dispatch(setCountriesData({data: res}));
    return res;
  })
});

export const getProvincesData = createThunkAction('DATA/getProvincesData', () => async (dispatch, state) => {
  const dashboard = state().dashboard;
  const { locationId, indicators: { value: indicator }} = dashboard;
  
  if (!indicator) return;

  const options = {
    widget: {
      id: '4b3d6e89-869c-45b6-88e3-28735d2b60fe',
      params: { indicator, iso: locationId }
    },
    indexKey: 'province'
  };

  return await WRIService.fetchDatasetWidgets(options);
});



export default {
  getIndicators,
  getCountriesData,
  getProvincesData
};
