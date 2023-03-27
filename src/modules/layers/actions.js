import { createAction, createThunkAction } from 'vizzuality-redux-tools';
import WRIService from 'services/wri-service';

export const setList = createAction('LAYERS/setList');
export const setLoading = createAction('LAYERS/setLoading');
export const setError = createAction('LAYERS/setError');
export const setLayersOpacity = createAction('LAYERS/setLayersOpacity');
export const getLayers = createThunkAction('LAYERS/getLayers', () => dispatch => {
  dispatch(setLoading(true));
  dispatch(setError(null));

  const datasets = {
    country_rankings: '4d47ebba-0d4f-4e5e-9b67-4b4ed3fb6e37',
    province_rankings: '460d7079-b934-4926-b542-96a44b18c741'
  };

  return WRIService.fetchDatasetsLayers(datasets)
    .then(layers => {
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
  getLayers,
  setLayersOpacity
};
