import { createAction, createThunkAction } from 'vizzuality-redux-tools';

import WRIService from 'services/wri-service';

import { default as countries } from 'services/data/countries.json';
import { INDICATORS } from 'services/wri-service/constants';

export const setCountries = createAction('DASHBOARD/setCountries');
export const setIndicators = createAction('DASHBOARD/setIndicators');
export const setLocation = createAction('DASHBOARD/setLocation');
export const setCountryValue = createAction('DASHBOARD/setCountryValue');
export const setIndicatorValue = createAction('DASHBOARD/setIndicatorValue');
export const setWidgetData = createAction('DASHBOARD/setWidgetData');
export const markForUpdate = createAction('DASHBOARD/markForUpdate');

export const getCountries = createThunkAction('DASHBOARD/getCountries', () => dispatch => {
  // JSON should not be imported here!
  // todo: use a service
  dispatch(setCountries({data: countries.map(item => ({label: item.name, value: item.iso}))}));
});

export const getIndicators = createThunkAction('DASHBOARD/getIndicators', () => dispatch => {
  // todo: use a service
  dispatch(setIndicators({data: INDICATORS}));
  dispatch(setIndicatorValue({data: INDICATORS[0].value}));
});

export const getWidgetData = createThunkAction('DASHBOARD/getWidgetData', () => (dispatch, state) => {
  const indicator = state().dashboard.indicators.value;
  
  if (!indicator) return;

  const options = {
    widget: {
      id: 'e6e5d286-212b-48d8-b5f4-1678cded82bc',
      params: { indicator }
    }
  };
  return WRIService.fetchDatasetWidgets(options)
  .then(res => {
    dispatch(setWidgetData({data: res}));
  })
  .catch((err) => {
    // dispatch(setError(err));
    // dispatch(setLoading(false));
  });
});

export const updateDashboard = createThunkAction('DASHBOARD/updateDashboard', () => dispatch => {
});

export default {
  setLocation,
  setCountryValue,
  setIndicatorValue,
  getCountries,
  getIndicators,
  getWidgetData,
  updateDashboard
};
