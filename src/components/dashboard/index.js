import { connect } from 'react-redux';
import {
  setSearchActive,
  setDashboardCollapsed
} from 'modules/app/actions';

import Dashboard from './component';

const mapStateToProps = state => ({
  ...state.app
});

const mapDispatchToProps = {
  setSearchActive,
  setDashboardCollapsed
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
