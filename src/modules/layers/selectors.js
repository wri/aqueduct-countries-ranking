import { createSelector } from 'reselect';
import { currentLocation } from 'modules/dashboard/selectors';

const layers = state => state.layers.list;

export const getActiveLayers = createSelector(
  [layers, currentLocation],
  (_layers, _currentLocation) => {
    if (!_layers) {
      return [];
    }
    
    // Global view: show country layer
    if (_currentLocation) return [_layers.province_rankings[0]];

    // Country view: show provinces in this case
    return [_layers.country_rankings[0]];
  }
);