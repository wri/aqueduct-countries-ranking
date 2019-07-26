import {
  setCountry,
  setDashboardCollapsed,
  setModalState
} from './actions';

const reducerMap = {
  [setCountry]: (state, { payload }) => ({
    ...state, country: payload.value
  }),
  [setDashboardCollapsed]: (state, { payload }) => ({
    ...state, isDashboardCollapsed: Boolean(payload)
  }),
  [setModalState]: (state, { payload }) => ({
    ...state, isModalOpen: Boolean(payload)
  })
};

export default reducerMap;
