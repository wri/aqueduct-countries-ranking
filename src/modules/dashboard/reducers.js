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
  [actions.setWidgetData]: (state, { payload: { data } }) => ({ ...state, widget: {...state.widget, data} })
};
