import * as actions from './actions';

import { SCOPE } from './constants';

export default {
  [actions.setCountries]: (state, { payload: { data }}) => ({ ...state, countries: {...state.countries, list: data} }),
  [actions.setIndicators]: (state, { payload: { data } }) => ({ ...state, indicators: {...state.indicators, list: data} }),
  [actions.setLocation]: (state, { payload: { data } }) => ({
    ...state,
    locationId: data,
    scope: data ? SCOPE.COUNTRY : SCOPE.GENERAL
  }),
  [actions.setCountryValue]: (state, { payload: { data } }) => ({ ...state, countries: {...state.countries, value: data} }),
  [actions.setIndicatorValue]: (state, { payload: { data } }) => ({ ...state, indicators: {...state.indicators, value: data} }),
  [actions.setWidgetData]: (state, { payload: { data } }) => ({ ...state, widget: {...state.widget, data} }),
  [actions.setWidgetFutureData]: (state, { payload: { data } }) => ({ ...state, widgetFuture: {...state.widgetFuture, data} }),
  [actions.setWidgetStats]: (state, { payload: { data: stats } }) => ({ ...state, widget: {...state.widget, stats} }),
  [actions.setWidgetFutureStats]: (state, { payload: { data: stats } }) => ({ ...state, widgetFuture: {...state.widgetFuture, stats} }),
  [actions.setWidth]: (state, { payload: { data } }) => ({ ...state, width: data }),
  [actions.setTab]: (state, { payload: { data } }) => ({ ...state, tab: data }),
  [actions.setPeriod]: (state, { payload: { data } }) => ({ ...state, period: data }),
  [actions.setPeriods]: (state, { payload: { data } }) => ({ ...state, periods: data }),
  [actions.setScenario]: (state, { payload: { data } }) => ({ ...state, scenario: data }),
  [actions.setScenarios]: (state, { payload: { data } }) => ({ ...state, scenarios: data })
};
