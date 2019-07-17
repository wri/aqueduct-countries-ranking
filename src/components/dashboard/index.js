import { connect } from 'react-redux';

import { setCountry } from 'modules/app/actions';
import { loadDashboardData } from 'modules/data/actions';
import { getCountryData } from 'modules/dashboard/selectors';

import Dashboard from './component';

const mapStateToProps = state => ({
  scope: state.dashboard.scope,
  headerData: getCountryData(state),
  widgetsData: state.dashboard.widget.data
});

const mapDispatchToProps = {
  loadDashboardData,
  setCountry
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
