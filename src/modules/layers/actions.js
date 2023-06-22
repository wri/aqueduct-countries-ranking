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
    country_rankings: '39fec76b-2bba-4d5c-aa02-0283be6be91a',
    province_rankings: '4eeb9cf7-68ee-4caf-a497-52022a002cf7'
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
