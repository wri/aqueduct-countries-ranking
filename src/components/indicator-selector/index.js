import { connect } from 'react-redux';

import { setIndicator } from 'modules/app/actions';
import IndicatorSelector from './component';

const mapStateToProps = state => ({
  indicators: state.dashboard.indicators
});

const mapDispatchToProps = {
  setIndicator
};

export default connect(mapStateToProps, mapDispatchToProps)(IndicatorSelector);
