import { connect } from 'react-redux';

import { setCountry } from 'modules/app/actions';
import { setWidth, setTab } from 'modules/dashboard/actions';
import { getCountryData, getCountryFutureData } from 'modules/dashboard/selectors';

import Dashboard from './component';

const mapStateToProps = state => ({
  scope: state.dashboard.scope,
  tab: state.dashboard.tab,
  width: state.dashboard.width,
  headerData: getCountryData(state),
  headerFutureData: getCountryFutureData(state),
  widget: state.dashboard.widget,
  widgetFuture: state.dashboard.widgetFuture,
});

const mapDispatchToProps = {
  setCountry,
  setWidth,
  setTab
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
