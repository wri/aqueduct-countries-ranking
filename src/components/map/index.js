import { connect } from 'react-redux';
import { setModalState } from 'modules/app/actions';
import {
  setMapViewport, setMapBounds, setMapLoaded, setMapFlying
} from 'modules/map/actions';

import Map from './component';
import { setLayersOpacity } from 'modules/layers/actions';
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
  setMapFlying,
  setLayersOpacity,
  setModalState
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
