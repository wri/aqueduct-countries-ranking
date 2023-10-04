import { connect } from 'react-redux';

import HeaderGeneralFuture from './component';
import { setModalState } from 'modules/app/actions';

const mapStateToProps = state => ({
  indicators: state.dashboard.indicators
});

const mapDispatchToProps = {
  setModalState
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderGeneralFuture);
