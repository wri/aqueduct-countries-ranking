import { TABS } from 'modules/dashboard/constants';
import { createSelector } from 'reselect';

const layers = state => state.layers.list;
const currentCountry = state => state.dashboard.locationId;
const currentScope = state => state.dashboard.scope;
const currentTab = state => state.dashboard.tab;
const currentIndicator = state => state.dashboard.indicators.value;
const period = state => state.dashboard.period
const scenario = state => state.dashboard.scenario

const indexes = { bws: 0, rfr: 1, drr: 2 };

export const getActiveLayers = createSelector(
  [layers, currentScope, currentTab, period, scenario, currentCountry, currentIndicator],
  (_layers, _currentScope, _currentTab, _period, _scenario, _currentCountry, _currentIndicator) => {
    if (!_layers) {
      return [];
    }

    const indicatorIndex = indexes[_currentIndicator];

    if (_currentTab === TABS.BASELINE) {
      if (_currentScope === 'COUNTRY') {
        const layerSpec = _layers.province_rankings[indicatorIndex];
        console.log({params: layerSpec.params})
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
    } else {
      // Country view: show provinces in this case
      if (_currentScope === 'COUNTRY') {
        return [{
          ..._layers.country_rankings[0],
          opacity: _layers.country_rankings[indicatorIndex].opacity || 0.5
        }];
      }

      return [{
        ..._layers.country_rankings_future[0],
        opacity: _layers.country_rankings_future[0].opacity || 0.5,
        params: { period: _period.value, scenario: _scenario.value }
      }];
    }

    // Country view: show provinces in this case
  }
);
