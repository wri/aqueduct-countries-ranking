import * as actions from './actions';

export default {
  [actions.setCountries]: (state, { payload: { countries }}) => ({ ...state, countries }),
  [actions.setIndicators]: (state, { payload: { indicators } }) => ({ ...state, indicators }),
  [actions.setLocation]: (state, { payload: { locationId } }) => ({ ...state, locationId }),
  [actions.setCountryValue]: (state, { payload: { countryValue } }) => ({ ...state, countryValue }),
  [actions.setIndicatorValue]: (state, { payload: { indicatorValue } }) => ({ ...state, indicatorValue })
};
