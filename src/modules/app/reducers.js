import {
  setCountry,
  setDashboardCollapsed
} from './actions';

const reducerMap = {
  [setCountry]: (state, { payload }) => ({
    ...state, country: payload.value
  }),
  [setDashboardCollapsed]: (state, { payload }) => ({
    ...state, isDashboardCollapsed: Boolean(payload)
  }),
};

export default reducerMap;
