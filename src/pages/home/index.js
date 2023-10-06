import React, { useEffect } from 'react';

import Main from 'components/main';

// utils
import { logPageView } from 'utils/analytics';

const HomePage = ({getLayers, loadDashboardData, loadDashboardCountryFutureData}) => {
  useEffect(() => {
    getLayers();
    loadDashboardData();
    loadDashboardCountryFutureData()
    logPageView();
  }, [getLayers, loadDashboardCountryFutureData, loadDashboardData]);


  return <Main />;
}

export default HomePage;
