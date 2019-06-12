import { connect } from 'react-redux';
import { setMapViewport, setMapBounds, setMapLoaded, setMapFlying } from 'modules/map/actions';

import Map from './component';
import { getActiveLayers } from './selectors';

const mapStateToProps = state => ({
  ...state.map,
  layers: getActiveLayers(state)
});

const mapDispatchToProps = {
  setMapViewport,
  setMapBounds,
  setMapLoaded,
  setMapFlying
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
