import { createSelector } from 'reselect';

const layers = state => state.layers.list;
const currentCountry = state => state.dashboard.locationId;
const currentScope = state => state.dashboard.scope;
const currentIndicator = state => state.dashboard.indicators.value;

const indexes = { bws: 0, rfr: 1, drr: 2 };

export const getActiveLayers = createSelector(
  [layers, currentScope, currentCountry, currentIndicator],
  (_layers, _currentScope, _currentCountry, _currentIndicator) => {
    if (!_layers) {
      return [];
    }

    const indicatorIndex = indexes[_currentIndicator];

    // Country view: show provinces in this case
    if (_currentScope === 'COUNTRY') {
      const layerSpec = _layers.province_rankings[indicatorIndex];
      return [{
        ...layerSpec,
        opacity: layerSpec.opacity || 0.5,
        params: { ...layerSpec.params, iso: _currentCountry }
      }];
    }

    // Global view: show country layer
    return [{
      ..._layers.country_rankings[indicatorIndex],
      opacity: _layers.country_rankings[indicatorIndex].opacity || 0.5
    }];
  }
);
