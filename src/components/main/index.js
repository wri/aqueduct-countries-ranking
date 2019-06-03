import { connect } from 'react-redux';
import {
  setDashboardCollapsed
} from 'modules/app/actions';

import Main from './component';

const mapStateToProps = state => ({
  ...state.app
});

const mapDispatchToProps = {
  setDashboardCollapsed
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
