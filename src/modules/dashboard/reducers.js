import * as actions from './actions';

export default {
  [actions.setCountries]: (state, { payload: { data }}) => ({ ...state, countries: {...state.countries, list: data} }),
  [actions.setIndicators]: (state, { payload: { data } }) => ({ ...state, indicators: {...state.indicators, list: data} }),
  [actions.setLocation]: (state, { payload: { data } }) => ({ ...state, data }),
  [actions.setCountryValue]: (state, { payload: { data } }) => ({ ...state, countries: {...state.countries, value: data} }),
  [actions.setIndicatorValue]: (state, { payload: { data } }) => ({ ...state, indicators: {...state.indicators, value: data} })
};
