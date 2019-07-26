import React from 'react';

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
  saveData
}) => {
  const backClickHandler = () => setCountry({data: null});
  const rankingTitle = (scope === SCOPE.GENERAL) ? 'Country Rankings' : 'Sub-national Rankings';

  return (
    <div className="dashboard">
      { scope === SCOPE.GENERAL ?
        <HeaderGeneral /> :
        <HeaderCountry data={headerData} onBackClick={backClickHandler} />
      }
      <DashboardWidgets data={widgetsData} onSelect={saveData} title={rankingTitle} />
      <Footer scope={scope} />
    </div>
  );
};

export default Dashboard;
