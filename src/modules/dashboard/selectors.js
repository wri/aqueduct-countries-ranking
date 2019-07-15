import { createSelector } from 'reselect';

const dashboard = state => state.dashboard;
const countries = createSelector([dashboard], _dashboard => _dashboard.countries);
const indicators = createSelector([dashboard], _dashboard => _dashboard.indicators);
const widget = createSelector([dashboard], _dashboard => _dashboard.widget);

export const currentLocation = createSelector([dashboard], _dashboard => _dashboard.locationId);

export const areCountriesReady = createSelector([countries], _countries => (
  _countries.isLoaded && !_countries.isLoading
));

export const areIndicatorsReady = createSelector([indicators], _indicators => (
  _indicators.isLoaded && !_indicators.isLoading
));

export const isWidgetNew = createSelector([widget], _widget => (
  !_widget.isLoaded && !_widget.isLoading
));

export const getCountryData = createSelector(
  [currentLocation, widget],
  (_currentLocation, _widget) => _currentLocation ? _widget.data[_currentLocation] : null
);