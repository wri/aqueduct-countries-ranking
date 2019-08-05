import { connect } from 'react-redux';

import { setIndicator } from 'modules/app/actions';
import IndicatorSelector from './component';
import { setModalState } from 'modules/app/actions';

const mapStateToProps = state => ({
  indicators: state.dashboard.indicators
});

const mapDispatchToProps = {
  setIndicator,
  setModalState
};

export default connect(mapStateToProps, mapDispatchToProps)(IndicatorSelector);
