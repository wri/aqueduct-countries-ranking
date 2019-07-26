import React from 'react';
import { Sidebar } from 'aqueduct-components';
import classnames from 'classnames';

import Dashboard from 'components/dashboard';
import Map from 'components/map';

const Main = ({ isDashboardCollapsed, setDashboardCollapsed}) => (
  <main className="c-main">
    <Sidebar
      customClass="c-aqueduct-sidebar"
      onToggle={isExpanded => {
        setDashboardCollapsed(!isExpanded);
      }}
      visible={!isDashboardCollapsed}
    >
      <Dashboard />
    </Sidebar>
    <div className="map-wrapper">
      <Map className={classnames('c-aqueduct-map', { '-half-width': !isDashboardCollapsed})} />
    </div>
  </main>
);

export default Main;
