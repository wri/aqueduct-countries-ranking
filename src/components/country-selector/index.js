import { connect } from 'react-redux';

import { setCountry } from 'modules/app/actions';
import { getCountryBounds } from 'modules/map/actions';
import CountrySelector from './component';

const mapStateToProps = state => ({
  countries: state.dashboard.countries
});

const mapDispatchToProps = {
  setCountry,
  getCountryBounds
};

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelector);
