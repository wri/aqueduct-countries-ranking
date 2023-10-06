import { createSelector } from 'reselect';
import processLocation from 'utils/process-location';

const dashboard = state => state.dashboard;
const data = state => state.data;
const countries = createSelector([data], _data => _data.countries.data);
const countriesFuture = createSelector([data], _data => _data.countries.data);

export const currentLocation = createSelector([dashboard], _dashboard => _dashboard.locationId);

export const getCountryData = createSelector(
  [currentLocation, countries],
  (_currentLocation, _countries) => _currentLocation
    ? processLocation(_currentLocation, _countries[_currentLocation])
    : null
);

export const getCountryFutureData = createSelector(
  [currentLocation, countriesFuture],
  (_currentLocation, _countriesFuture) => _currentLocation
    ? processLocation(_currentLocation, _countriesFuture[_currentLocation])
    : null
);