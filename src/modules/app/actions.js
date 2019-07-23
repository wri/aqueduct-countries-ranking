import { createAction, createThunkAction } from 'vizzuality-redux-tools';

import processLocation from 'utils/process-location';

import {
  setCountryValue,
  setIndicatorValue,
  setLocation,
  setWidgetData,
  setWidgetStats
} from 'modules/dashboard/actions';

import { getCountriesData, getProvincesData } from 'modules/data/actions';

export const setDashboardCollapsed = createAction('APP/setDashboardCollapsed');

export const setCountry = createThunkAction('APP/setCountry', payload => dispatch => {
  dispatch(setLocation(payload));
  dispatch(setCountryValue(payload));

  const getData = (payload.data) ? getProvincesData : getCountriesData;

  dispatch(getData()).then(data => {
    const countries4widget = Object.entries(data)
      .filter(entry => entry[0] !== '_stats')
      .map(entry => processLocation(entry[0], entry[1]));

    dispatch(setWidgetStats({data: data._stats}));
    dispatch(setWidgetData({data: countries4widget}));
  });
});

export const setIndicator = createThunkAction('APP/setIndicator', payload => dispatch => {
  dispatch(setIndicatorValue(payload));
  dispatch(getCountriesData()).then(data => {
    const provinces4widget = Object.entries(data)
      .filter(entry => entry[0] !== '_stats')
      .map(entry => processLocation(entry[0], entry[1]));

    dispatch(setWidgetStats({data: data._stats}));
    dispatch(setWidgetData({data: provinces4widget}));
  });
});

