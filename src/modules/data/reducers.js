import * as actions from './actions';

export default {
  [actions.setCountriesData]: (state, { payload: { data } }) => ({ ...state, countries: {...state.countries, data} }),
  [actions.setCountriesFutureData]: (state, { payload: { data } }) => ({ ...state, countriesFuture: {...state.countriesFuture, data} }),
  // These actions are created by vizzuality-redux-tools for thunks
  'DATA/getCountries_STARTED': state  => ({ ...state, countries: {...state.countries, isLoading: true} }),
  'DATA/getCountries_SUCCEEDED': state  => ({ ...state, countries: {...state.countries, isLoading: false, isLoaded: true} }),
  'DATA/getIndicators_STARTED': state  => ({ ...state, indicators: {...state.indicators, isLoading: true} }),
  'DATA/getIndicators_SUCCEEDED': state  => ({ ...state, indicators: {...state.indicators, isLoading: false, isLoaded: true} }),
  'DATA/getWidgetData_STARTED': state  => ({ ...state, widget: {...state.widget, isLoading: true} }),
  'DATA/getWidgetData_SUCCEEDED': state  => ({ ...state, widget: {...state.widget, isLoading: false, isLoaded: true} })
};
