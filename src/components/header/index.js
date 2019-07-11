import { connect } from 'react-redux';

import {
  setCountryValue
} from 'modules/dashboard/actions';
import {
  getHeaderProps
} from 'modules/dashboard/selectors';
import Header from './component';

const mapStateToProps = state => ({
  ...getHeaderProps(state)
});

const mapDispatchToProps = {
  setCountryValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
