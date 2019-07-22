import { createAction, createThunkAction } from 'vizzuality-redux-tools';
import WRIService from 'services/wri-service';

export const setList = createAction('LAYERS/setList');
export const setLoading = createAction('LAYERS/setLoading');
export const setError = createAction('LAYERS/setError');
export const getLayers = createThunkAction('LAYERS/getLayers', () => dispatch => {
  dispatch(setLoading(true));
  dispatch(setError(null));

  const datasets = {
    country_rankings: 'fd4b4ba5-a16a-45a4-bc6b-954397e37bda',
    province_rankings: 'e0adfbfb-441d-4ec5-9e4c-7d051d0f7b22'
  };

  return WRIService.fetchDatasetsLayers(datasets)
    .then(layers => {
      console.log(layers)
      dispatch(setList(layers));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      dispatch(setError(err));
      dispatch(setLoading(false));
    });
});

export default {
  setList,
  setLoading,
  setError,
  getLayers
};