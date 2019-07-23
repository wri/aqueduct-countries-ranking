import { createSelector } from 'reselect';

const layers = state => state.layers.list;
const currentScope = state => state.dashboard.scope;
const currentIndicator = state => state.dashboard.indicators.value;

const indexes = { bws: 0, drr: 1, rfr: 2 };

export const getActiveLayers = createSelector(
  [layers, currentScope, currentIndicator],
  (_layers, _currentScope, _currentIndicator) => {
    if (!_layers) {
      return [];
    }

    const indicatorIndex = indexes[_currentIndicator];
    
    // Country view: show provinces in this case
    if (_currentScope === 'COUNTRY') return [_layers.province_rankings[indicatorIndex]];

    // Global view: show country layer
    return [_layers.country_rankings[indicatorIndex]];
  }
);