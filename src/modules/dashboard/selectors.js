import { createSelector } from 'reselect';
import processCountry from 'utils/process-country';

const dashboard = state => state.dashboard;
const data = state => state.data;
const countries = createSelector([data], _data => _data.countries.data);

export const currentLocation = createSelector([dashboard], _dashboard => _dashboard.locationId);

export const getCountryData = createSelector(
  [currentLocation, countries],
  (_currentLocation, _countries) => _currentLocation
    ? processCountry(_currentLocation, _countries[_currentLocation])
    : null
);