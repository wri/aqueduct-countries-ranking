import {
  setCountry,
  setWidgetsCollapsed,
  setSearchActive,
  setDashboardCollapsed
} from './actions';

const reducerMap = {
  [setCountry]: (state, { payload }) => ({
    ...state, country: payload.value
  }),
  [setWidgetsCollapsed]: (state, { payload }) => ({
    ...state, areWidgetsCollapsed: Boolean(payload)
  }),
  [setSearchActive]: (state, { payload }) => ({
    ...state, isSearchActive: Boolean(payload)
  }),
  [setDashboardCollapsed]: (state, { payload }) => ({
    ...state, isDashboardCollapsed: Boolean(payload)
  }),
};

export default reducerMap;
