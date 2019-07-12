import { connect } from 'react-redux';

import {
  setCountry,
  setIndicator
} from 'modules/app/actions';
import {
  getHeaderProps
} from 'modules/dashboard/selectors';
import Header from './component';

const mapStateToProps = state => ({
  ...getHeaderProps(state)
});

const mapDispatchToProps = {
  setCountry,
  setIndicator
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
