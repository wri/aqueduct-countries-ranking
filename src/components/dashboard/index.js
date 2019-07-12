import { connect } from 'react-redux';

import {
  getCountries,
  getIndicators,
  getWidgetData
} from 'modules/dashboard/actions';
import {
  areCountriesReady,
  areIndicatorsReady,
  isWidgetNew
} from 'modules/dashboard/selectors';

import Dashboard from './component';

const mapStateToProps = state => ({
  ...state.app,
  areCountriesReady: areCountriesReady(state),
  areIndicatorsReady: areIndicatorsReady(state),
  widget: {
    ...state.dashboard.widget,
    isNew: isWidgetNew(state)
  }
});

const mapDispatchToProps = {
  getCountries,
  getIndicators,
  getWidgetData
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
