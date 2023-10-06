import { createAction, createThunkAction } from 'vizzuality-redux-tools';

import WRIService from 'services/wri-service';
import processLocation from 'utils/process-location';

import { INDICATORS, SCENARIOS, TIMELINE_ITEMS } from 'services/wri-service/constants';

import { setCountry } from 'modules/app/actions';

import {
  setCountries,
  // setCountryValue,
  setIndicators,
  setIndicatorValue,
  setWidgetData,
  setWidgetFutureData,
  setWidgetStats,
  setWidgetFutureStats,
  setPeriods,
  setPeriod,
  setScenarios,
  setScenario
} from 'modules/dashboard/actions';

export const setCountriesData = createAction('DATA/setCountriesData');
export const setCountriesFutureData = createAction('DATA/setCountriesFutureData');

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
      if (data._stats.min === -9999) {
        data._stats.min = 0
      }
      dispatch(setWidgetStats({data: data._stats}));
      dispatch(setWidgetData({data: countries4widget}));
    }
  });
});

export const loadDashboardCountryFutureData = createThunkAction('DATA/loadDashboardCountryFutureData', () => (dispatch, state) => {
  const { router } = state();
  const { country } = router.query || {};

  dispatch(getCountriesFutureData()).then(data => {
    const countries4widget = Object.entries(data)
      .filter(entry => entry[0] !== '_stats')
      .map(entry => processLocation(entry[0], entry[1]));

    if (country) {
      dispatch(setCountry({data: country.toUpperCase()}));
    } else {
      if (data._stats.min === -9999) {
        data._stats.min = 0
      }
      dispatch(setWidgetFutureStats({data: data._stats}));
      dispatch(setWidgetFutureData({data: countries4widget}));
    }
  });
})

export const loadDashboardRegionalFutureData = createThunkAction('DATA/loadDashboardRegionalFutureData', () => (dispatch, state) => {
  dispatch(getProvincesFutureData()).then(data => {
    const widgetData = Object.entries(data)
      .filter(entry => entry[0] !== '_stats')
      .map(entry => processLocation(entry[0], entry[1]));

    if (data._stats.min === -9999) {
      data._stats.min = 0
    }
    dispatch(setWidgetFutureStats({data: data._stats}));
    dispatch(setWidgetFutureData({data: widgetData}));
  });
})

export const getIndicators = createThunkAction('DATA/getIndicators', () => dispatch => {
  // todo: use a service
  dispatch(setIndicators({data: INDICATORS}))
  dispatch(setIndicatorValue({data: INDICATORS[0].value}));
  dispatch(setPeriods({data: TIMELINE_ITEMS}));
  dispatch(setPeriod({data: TIMELINE_ITEMS[0]}));
  dispatch(setScenarios({data: SCENARIOS}));
  dispatch(setScenario({data: SCENARIOS[0]}));
});

export const getCountriesData = createThunkAction('DATA/getCountriesData', () => async (dispatch, state) => {
  const dashboard = state().dashboard;
  const { indicators: { value: indicator }} = dashboard;
  
  if (!indicator) return;

  const options = {
    widget: {
      id: 'f1a0cf4c-d6dd-4e4c-840d-70a3ecafa9ed',
      params: { indicator }
    },
    indexKey: 'iso'
  };

  return WRIService.fetchDatasetWidgets(options)
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

export const getCountriesFutureData = createThunkAction('DATA/getCountriesFutureData', () => async (dispatch, state) => {
  const dashboard = state().dashboard;
  const { scenario: { value: scenario }, period: { value: period } } = dashboard;
  
  if (!scenario || !period ) return;

  const options = {
    widget: {
      id: '85d03d03-9eb0-4280-a50b-4934d77bfa89',
      params: { scenario, period }
    },
    indexKey: 'iso'
  };

  return WRIService.fetchDatasetWidgets(options)
    .then(res => {
      dispatch(setCountriesFutureData({data: res}));
      return res
    })
});

export const getProvincesData = createThunkAction('DATA/getProvincesData', () => async (dispatch, state) => {
  const dashboard = state().dashboard;
  const { locationId, indicators: { value: indicator }} = dashboard;
  
  if (!indicator) return;

  const options = {
    widget: {
      id: 'cafa5f8a-2d0d-4dec-8deb-f2127823c5dc',
      params: { indicator, iso: locationId }
    },
    indexKey: 'province'
  };

  return WRIService.fetchDatasetWidgets(options);
});

export const getProvincesFutureData = createThunkAction('DATA/getProvincesFutureData', () => async (dispatch, state) => {
  const dashboard = state().dashboard;
  const { locationId, scenario: { value: scenario }, period: { value: period }} = dashboard;
  
  if (!period || !scenario) return;

  const options = {
    widget: {
      id: 'd6a86dd2-5a95-4731-924e-7fee451c4e63',
      params: { scenario, period , iso: locationId }
    },
    indexKey: 'province'
  };

  return WRIService.fetchDatasetWidgets(options);
});



export default {
  getIndicators,
  getCountriesData,
  getProvincesData
};
