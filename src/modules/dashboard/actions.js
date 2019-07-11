import { createAction, createThunkAction } from 'vizzuality-redux-tools';

import { default as countries } from 'services/data/countries.json';
import { INDICATORS } from 'services/wri-service/constants';

export const setCountries = createAction('DASHBOARD/setCountries');
export const setIndicators = createAction('DASHBOARD/setIndicators');
export const setLocation = createAction('DASHBOARD/setLocation');
export const setCountryValue = createAction('DASHBOARD/setCountryValue');
export const setIndicatorValue = createAction('DASHBOARD/setIndicatorValue');

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

export default {
  setLocation,
  setCountryValue,
  setIndicatorValue
};
