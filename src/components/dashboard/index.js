import { connect } from 'react-redux';

import { setCountry, saveData } from 'modules/app/actions';
import { getCountryData } from 'modules/dashboard/selectors';

import Dashboard from './component';

const mapStateToProps = state => ({
  scope: state.dashboard.scope,
  headerData: getCountryData(state),
  widgetsData: state.dashboard.widget.data
});

const mapDispatchToProps = {
  setCountry,
  saveData
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
