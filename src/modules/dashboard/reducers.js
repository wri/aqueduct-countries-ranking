import * as actions from './actions';

export default {
  [actions.setCountries]: (state, { payload: { data }}) => ({ ...state, countries: {...state.countries, list: data} }),
  [actions.setIndicators]: (state, { payload: { data } }) => ({ ...state, indicators: {...state.indicators, list: data} }),
  [actions.setLocation]: (state, { payload: { data } }) => ({ ...state, data }),
  [actions.setCountryValue]: (state, { payload: { data } }) => ({ ...state, countries: {...state.countries, value: data} }),
  [actions.setIndicatorValue]: (state, { payload: { data } }) => ({ ...state, indicators: {...state.indicators, value: data} }),
  [actions.setWidgetData]: (state, { payload: { data } }) => ({ ...state, widget: {...state.widget, data} }),
  // These actions are created by vizzuality-redux-tools for thunks
  'DASHBOARD/getCountries_STARTED': state  => ({ ...state, countries: {...state.countries, isLoading: true} }),
  'DASHBOARD/getCountries_SUCCEEDED': state  => ({ ...state, countries: {...state.countries, isLoading: false, isLoaded: true} }),
  'DASHBOARD/getIndicators_STARTED': state  => ({ ...state, indicators: {...state.indicators, isLoading: true} }),
  'DASHBOARD/getIndicators_SUCCEEDED': state  => ({ ...state, indicators: {...state.indicators, isLoading: false, isLoaded: true} }),
  'DASHBOARD/getWidgetData_STARTED': state  => ({ ...state, widget: {...state.widget, isLoading: true} }),
  'DASHBOARD/getWidgetData_SUCCEEDED': state  => ({ ...state, widget: {...state.widget, isLoading: false, isLoaded: true} })
};
