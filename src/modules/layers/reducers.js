import {
  setList,
  setLoading,
  setError,
  setLayersOpacity
} from './actions';

export default {
  [setList]: (state, { payload }) => ({
    ...state, list: payload
  }),
  [setLoading]: (state, { payload }) => ({
    ...state, isLoading: Boolean(payload)
  }),
  [setError]: (state, { payload }) => ({
    ...state, error: payload
  }),
  [setLayersOpacity]: (state, { payload }) => ({
    ...state,
    list: {
      country_rankings: state.list.country_rankings.map(l => ({ ...l, opacity: payload })),
      province_rankings: state.list.province_rankings.map(l => ({ ...l, opacity: payload })),
      country_rankings_future: state.list.country_rankings_future.map(l => ({ ...l, opacity: payload })),
      province_rankings_future: state.list.province_rankings_future.map(l => ({ ...l, opacity: payload })),
    }
  })
};
