import React, { useEffect } from 'react';

import Main from 'components/main';

// utils
import { logPageView } from 'utils/analytics';

const HomePage = ({getLayers, loadDashboardData}) => {
  useEffect(() => {
    getLayers();
    loadDashboardData();
    logPageView();
  }, [getLayers, loadDashboardData]);


  return <Main />;
}

export default HomePage;
