import { createAction, createThunkAction } from 'vizzuality-redux-tools';

export const setCountries = createAction('DASHBOARD/setCountries');
export const setIndicators = createAction('DASHBOARD/setIndicators');
export const setLocation = createAction('DASHBOARD/setLocation');
export const setCountryValue = createAction('DASHBOARD/setCountryValue');
export const setIndicatorValue = createAction('DASHBOARD/setIndicatorValue');
export const setWidgetData = createAction('DASHBOARD/setWidgetData');

export default {
  setLocation,
  setCountryValue,
  setIndicatorValue
};
