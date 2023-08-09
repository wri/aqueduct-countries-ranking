import { connect } from 'react-redux';

import { setCountry } from 'modules/app/actions';
import { setWidth } from 'modules/dashboard/actions';
import { getCountryData } from 'modules/dashboard/selectors';

import Dashboard from './component';

const mapStateToProps = state => ({
  scope: state.dashboard.scope,
  width: state.dashboard.width,
  headerData: getCountryData(state),
  widget: state.dashboard.widget
});

const mapDispatchToProps = {
  setCountry,
  setWidth
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
