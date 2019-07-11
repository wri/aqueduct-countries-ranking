import React, { useEffect } from 'react';

import Header from 'components/header';

const Dashboard = ({
  areCountriesReady,
  getCountries,
  areIndicatorsReady,
  getIndicators
}) => {
  useEffect(() => {
    if (!areCountriesReady) {
      getCountries();
    }
    if (!areIndicatorsReady) {
      getIndicators();
    }
  });

  return (
    <div className="dashboard">
      <Header />
    </div>
  );
};

export default Dashboard;
