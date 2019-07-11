import { connect } from 'react-redux';

import {
  setSearchActive,
  setDashboardCollapsed
} from 'modules/app/actions';
import {
  getCountries,
  getIndicators
} from 'modules/dashboard/actions';

import Dashboard from './component';

const mapStateToProps = state => ({
  ...state.app,
  areCountriesReady: state.dashboard.countries.isLoaded && !state.dashboard.countries.isLoading,
  areIndicatorsReady: state.dashboard.indicators.isLoaded && !state.dashboard.indicators.isLoading
});

const mapDispatchToProps = {
  getCountries,
  getIndicators,
  setSearchActive,
  setDashboardCollapsed
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
