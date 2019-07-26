import { connect } from 'react-redux';
import { setMapViewport, setMapBounds, setMapLoaded, setMapFlying } from 'modules/map/actions';

import Map from './component';
import { getActiveLayers } from 'modules/layers/selectors';

const mapStateToProps = state => ({
  ...state.map,
  layers: getActiveLayers(state),
  scope: state.dashboard.scope
});

const mapDispatchToProps = {
  setMapViewport,
  setMapBounds,
  setMapLoaded,
  setMapFlying
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
