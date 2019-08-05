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
  [setModalState]: (state, { payload: { isOpen, content } }) => ({
    ...state, isModalOpen: Boolean(isOpen), modalContent: content
  })
};

export default reducerMap;
