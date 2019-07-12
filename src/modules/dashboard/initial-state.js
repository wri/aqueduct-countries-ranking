import { SCOPE } from './constants';

export default {
  isEnabled: true,
  scope: SCOPE.GENERAL,
  isCollapsed: false,
  locationId: null,
  countries: {
    list: [],
    value: null,
    isLoading: false,
    isLoaded: false,
    error: null
  },
  indicators: {
    list: [],
    value: null,
    isLoading: false,
    isLoaded: false,
    error: null
  },
  widget: {
    isLoading: false,
    isLoaded: false,
    data: []
  }
};
