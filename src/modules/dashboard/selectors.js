import { createSelector } from 'reselect';
import { processLocation } from 'utils/process-location';

const dashboard = state => state.dashboard;
const data = state => state.data;
const countries = createSelector([data], _data => _data.countries.data);
const countriesFuture = createSelector([data], _data => _data.countriesFuture.data);

export const currentLocation = createSelector([dashboard], _dashboard => _dashboard.locationId);

export const getCountryData = createSelector(
  [currentLocation, countries],
  (_currentLocation, _countries) => _currentLocation && _countries
    ? processLocation(_currentLocation, _countries[_currentLocation])
    : null
);

export const getCountryFutureData = createSelector(
  [currentLocation, countriesFuture],
  (_currentLocation, _countriesFuture) => _currentLocation && _countriesFuture
    ? processLocation(_currentLocation, _countriesFuture[_currentLocation])
    : null
);