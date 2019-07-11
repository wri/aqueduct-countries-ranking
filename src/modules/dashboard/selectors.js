import { createSelector } from 'reselect';

const dashboard = state => state.dashboard;

export const getCountries = createSelector([dashboard], _dashboard => _dashboard.countries);
export const getIndicators = createSelector([dashboard], _dashboard => _dashboard.indicators);

export const getHeaderProps = createSelector([
  getCountries,
  getIndicators
], (countries, indicators) => ({
  countries,
  indicators
}));