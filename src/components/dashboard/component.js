import React, { useEffect } from 'react';

import HeaderGeneral from 'components/header-general';
import HeaderCountry from 'components/header-country';
import DashboardWidgets from 'components/dashboard-widgets';
import Footer from 'components/footer';

import { SCOPE } from 'modules/dashboard/constants';

const Dashboard = ({
  scope,
  headerData,
  widgetsData,
  setCountry,
  saveData,
  loadDashboardData
}) => {
  useEffect(() => {
     loadDashboardData()
  }, [loadDashboardData]);

  const backClickHandler = () => setCountry({data: null});

  return (
    <div className="dashboard">
      { scope === SCOPE.GENERAL ?
        <HeaderGeneral /> :
        <HeaderCountry data={headerData} onBackClick={backClickHandler} />
      }
      <DashboardWidgets data={widgetsData} onSelect={saveData} />
      <Footer scope={scope} />
    </div>
  );
};

export default Dashboard;
