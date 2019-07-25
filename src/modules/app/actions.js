import { createAction, createThunkAction } from 'vizzuality-redux-tools';

import exportService from 'services/export-service';
import processLocation from 'utils/process-location';

import {
  setCountryValue,
  setIndicatorValue,
  setLocation,
  setWidgetData,
  setWidgetStats
} from 'modules/dashboard/actions';
import { SCOPE } from 'modules/dashboard/constants';

import { getCountriesData, getProvincesData } from 'modules/data/actions';
import { setMapBounds } from 'modules/map/actions';

export const setDashboardCollapsed = createAction('APP/setDashboardCollapsed');

export const setCountry = createThunkAction('APP/setCountry', payload => dispatch => {
  dispatch(setLocation(payload));
  dispatch(setCountryValue(payload));

  const getData = (payload.data) ? getProvincesData : getCountriesData;

  dispatch(getData()).then(data => {
    const widgetData = Object.entries(data)
      .filter(entry => entry[0] !== '_stats')
      .map(entry => processLocation(entry[0], entry[1]));

    dispatch(setWidgetStats({data: data._stats}));
    dispatch(setWidgetData({data: widgetData}));
  });

  if (!payload.data) {
    dispatch(setMapBounds({bbox: [-180, 90, 180, -90]}));
  }
});

export const setIndicator = createThunkAction('APP/setIndicator', payload => (dispatch, state) => {
  dispatch(setIndicatorValue(payload));

  const {dashboard: {scope}} = state();
  const getData = (scope === SCOPE.COUNTRY ) ? getProvincesData : getCountriesData;

  dispatch(getData()).then(data => {
    const widgetData = Object.entries(data)
      .filter(entry => entry[0] !== '_stats')
      .map(entry => processLocation(entry[0], entry[1]));

    dispatch(setWidgetStats({data: data._stats}));
    dispatch(setWidgetData({data: widgetData}));
  });
});

export const saveData = createThunkAction('APP/saveData', () => () => {
  exportService.saveRankings();
});

