import { connect } from 'react-redux';

import {
  getCountries,
  getIndicators,
  setCountryValue
} from 'modules/dashboard/actions';
import Header from './component';

const mapStateToProps = state => ({
  ...state.dashboard,
});

const mapDispatchToProps = {
  getCountries,
  getIndicators,
  setCountryValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
