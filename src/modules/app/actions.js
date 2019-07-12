import { createAction, createThunkAction } from 'vizzuality-redux-tools';

import {
  setCountryValue,
  setIndicatorValue,
  setLocation,
  markForUpdate
} from 'modules/dashboard/actions';

export const setDashboardCollapsed = createAction('APP/setDashboardCollapsed');

export const setCountry = createThunkAction('APP/setCountry', payload => dispatch => {
  dispatch(setLocation(payload));
  dispatch(setCountryValue(payload));
});

export const setIndicator = createThunkAction('APP/setIndicator', payload => dispatch => {
  dispatch(setIndicatorValue(payload));
});

