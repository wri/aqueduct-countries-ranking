import { createAction } from 'vizzuality-redux-tools';

export const setCountries = createAction('DASHBOARD/setCountries');
export const setIndicators = createAction('DASHBOARD/setIndicators');
export const setLocation = createAction('DASHBOARD/setLocation');
export const setCountryValue = createAction('DASHBOARD/setCountryValue');
export const setIndicatorValue = createAction('DASHBOARD/setIndicatorValue');
export const setWidgetData = createAction('DASHBOARD/setWidgetData');
export const setWidgetStats = createAction('DASHBOARD/setWidgetStats');
export const setWidth = createAction('DASHBOARD/setWidth');
export const setTab = createAction('DASHBOARD/setTab');
export const setPeriod = createAction('DASHBOARD/setPeriod')
export const setPeriods = createAction('DASHBOARD/setPeriods')
export const setScenario = createAction('DASHBOARD/setScenario')
export const setScenarios = createAction('DASHBOARD/setScenarios')

export default {
  setLocation,
  setCountryValue,
  setIndicatorValue,
};
