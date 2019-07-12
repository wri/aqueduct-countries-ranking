import React, { Component } from 'react';
import { Sidebar } from 'aqueduct-components';

import Dashboard from 'components/dashboard';
import Map from 'components/map';

class Main extends Component {
  componentWillMount() {
    this.props.getLayers();
  }
  
  render() {
    const { isDashboardCollapsed, setDashboardCollapsed } = this.props;

    return (
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
          <Map className="c-aqueduct-map" />
        </div>
      </main>
    );
  }
}

export default Main;
