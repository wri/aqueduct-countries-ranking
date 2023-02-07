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
    country_rankings: '715001b0-5b85-4f7b-98fe-d368f6746171',
    province_rankings: '3331da0e-fd28-4453-9051-e9c67518d63e'
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
