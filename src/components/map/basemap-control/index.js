import { connect } from 'react-redux';
import { setBasemap } from 'modules/map/actions';
import BasemapControl from './component';

export default connect(
  state => ({ basemap: state.map.basemap }),
  { setBasemap }
)(BasemapControl);
