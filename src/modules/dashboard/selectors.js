import { createSelector } from 'reselect';

const dashboard = state => state.dashboard;

export const getCountries = createSelector([dashboard], _dashboard => _dashboard.countries);
export const getIndicators = createSelector([dashboard], _dashboard => _dashboard.indicators);
export const getWidget = createSelector([dashboard], _dashboard => _dashboard.widget);

export const getHeaderProps = createSelector([
  dashboard,
  getCountries,
  getIndicators
], (dashboard, countries, indicators) => ({
  scope: dashboard.scope,
  locationId: dashboard.locationId,
  countries,
  indicators
}));

export const areCountriesReady = createSelector([getCountries], _countries => (
  _countries.isLoaded && !_countries.isLoading
));

export const areIndicatorsReady = createSelector([getIndicators], _indicators => (
  _indicators.isLoaded && !_indicators.isLoading
));

export const isWidgetNew = createSelector([getWidget], _widget => (
  !_widget.isLoaded && !_widget.isLoading
));