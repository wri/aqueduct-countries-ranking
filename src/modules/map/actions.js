import axios from 'axios';
import { createAction, createThunkAction } from 'vizzuality-redux-tools';

export const setMap = createAction('MAP/setMap');
export const setMapBounds = createAction('MAP/setMapBounds');
export const setMapStyle = createAction('MAP/setMapStyle');
export const setMapLabels = createAction('MAP/setMapLabels');
export const setMapRoads = createAction('MAP/setMapRoads');
export const setBasemap = createAction('MAP/setBasemap');
export const setMapViewport = createAction('MAP/setMapViewport');
export const setMapLoaded = createAction('MAP/setMapLoaded');
export const setMapFlying = createAction('MAP/setMapFlying');

export const getCountryBounds = createThunkAction('MAP/getCountryBounds', () => (dispatch, getState) => {
  const state = getState();
  const { locationId: iso, width: offset } = state.dashboard;
  const boundsSQL = `SELECT ST_AsGeoJSON(ST_AsText(ST_Envelope(the_geom))) as geometry, gid_0, name_0 FROM gadm_wri_0 WHERE gid_0 = '${iso}'`;

  axios.get(`https://wri-rw.carto.com/api/v2/sql?q=${boundsSQL}`)
    .then((result) => {
      const theGeom = JSON.parse(result.data.rows[0].geometry);
      const bounds = window.L.geoJSON(theGeom).getBounds();
      const bbox = bounds.toBBoxString().split(',').map(b => parseFloat(b));
      dispatch(setMapBounds({ bbox, options: {
        paddingTopLeft: [offset, 0]
      } }));
    });
});

export default {
  setMap,
  setMapBounds,
  setMapStyle,
  setBasemap,
  setMapLabels,
  setMapRoads,
  setMapViewport,
  setMapLoaded,
  setMapFlying,
  getCountryBounds
};
