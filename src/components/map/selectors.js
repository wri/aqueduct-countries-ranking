import { createSelector } from 'reselect';

const layers = state => state.layers.list;

export const getActiveLayers = createSelector(
  [layers], (_layers) => {
    if (!_layers) {
      return [];
    }
    // First we flatten the layers
    const flatLayers = Object.values(_layers).reduce((acc, layerGroup) => [...acc, ...layerGroup], []);

    return flatLayers;
  //   const { indicator } = _parametrization;
  //   const params = getLayerParametrization(_parametrization, _ponderation);

  //   return _activeLayers.map((_activeLayer, index) => ({
  //     ..._activeLayer,
  //     name: INDICATOR_NAMES_RELATION[indicator],
  //     active: true,
  //     // only applies opacity to the last layer (the higher one)
  //     ...(index === _activeLayers.length - 1) && { ..._updatedLayerParams },
  //     ...(_activeLayer.layerConfig.params_config && _activeLayer.layerConfig.params_config.length > 0) && {
  //       params: {
  //         ...reduceParams(_activeLayer.layerConfig.params_config),
  //         ...!!_activeLayer.layerConfig.body.url && { url: _activeLayers.layerConfig.body.url },
  //         ...params
  //       }
  //     },
  //     ...!FUTURE_INDICATORS_IDS.includes(_activeLayer.id) && { legendConfig: getLayerLegend(indicator) }
  //   }));
  }
);