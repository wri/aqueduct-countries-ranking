import { connect } from 'react-redux';

import { setCountry } from 'modules/app/actions';
import Header from './component';

const mapStateToProps = state => ({
  ...state.app,
  isCountrySelected: false
});

const mapDispatchToProps = {
  setCountry
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
