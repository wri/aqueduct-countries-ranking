import React, { useEffect } from 'react';

import Main from 'components/main';

const HomePage = ({getLayers, loadDashboardData}) => {
  useEffect(() => {
    getLayers();
    loadDashboardData();
  }, [getLayers, loadDashboardData]);


  return <Main />;
}

export default HomePage;
