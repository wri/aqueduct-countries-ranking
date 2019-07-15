import { connect } from 'react-redux';

import { setCountry } from 'modules/app/actions';
import {
  getCountries,
  getIndicators,
  getWidgetData
} from 'modules/dashboard/actions';
import {
  areCountriesReady,
  areIndicatorsReady,
  isWidgetNew,
  getCountryData
} from 'modules/dashboard/selectors';

import Dashboard from './component';

const mapStateToProps = state => ({
  scope: state.dashboard.scope,
  areCountriesReady: areCountriesReady(state),
  areIndicatorsReady: areIndicatorsReady(state),
  widget: {
    ...state.dashboard.widget,
    isNew: isWidgetNew(state)
  },
  countryData: getCountryData(state)
});

const mapDispatchToProps = {
  getCountries,
  getIndicators,
  getWidgetData,
  setCountry
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
