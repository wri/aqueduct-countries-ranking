import { connect } from 'react-redux';

import { setCountry } from 'modules/app/actions';
import Footer from './component';

const mapStateToProps = state => ({
  scope: state.dashboard.scope,
  locationId: state.dashboard.locationId,
  countries: state.dashboard.countries
});

const mapDispatchToProps = {
  setCountry
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
