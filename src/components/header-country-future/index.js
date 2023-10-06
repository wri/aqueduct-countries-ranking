import { connect } from 'react-redux';

import { setModalState } from 'modules/app/actions';
import { setPeriod, setScenario } from 'modules/dashboard/actions';
import { loadDashboardCountryFutureData } from 'modules/data/actions';

import HeaderCountryFuture from './component';

const mapStateToProps = state => ({
  indicators: state.dashboard.indicators,
  period: state.dashboard.period,
  periods: state.dashboard.periods,
  scenario: state.dashboard.scenario,
  scenarios: state.dashboard.scenarios
});

const mapDispatchToProps = {
  setModalState,
  setPeriod,
  loadDashboardCountryFutureData,
  setScenario
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCountryFuture);