import { connect } from 'react-redux';
import {
  setDashboardCollapsed
} from 'modules/app/actions';
import { getLayers } from 'modules/layers/actions';
import { setModalState } from 'modules/app/actions';


import Main from './component';

const mapStateToProps = state => ({
  ...state.app
});

const mapDispatchToProps = {
  setDashboardCollapsed,
  getLayers,
  setModalState
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
