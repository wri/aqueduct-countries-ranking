import { connect } from 'react-redux';

import { setCountry } from 'modules/app/actions';
import CountrySelector from './component';

const mapStateToProps = state => ({
  countries: state.dashboard.countries
});

const mapDispatchToProps = { setCountry };

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelector);
