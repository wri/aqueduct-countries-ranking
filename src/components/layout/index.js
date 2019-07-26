import { connect } from 'react-redux';
import Layout from './component';

import { loadDashboardData } from 'modules/data/actions';
import { getLayers } from 'modules/layers/actions';

const mapStateToProps = ({ page }) => ({ page });
const mapDispatchToProps = {
  getLayers,
  loadDashboardData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
