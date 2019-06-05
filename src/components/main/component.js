import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from 'aqueduct-components';

import Dashboard from 'components/dashboard';
import Map from 'components/map';

class Main extends Component {
  componentWillMount() {
    this.props.getLayers();
  }
  
  render() {
    const { type, id, isDashboardCollapsed, setDashboardCollapsed } = this.props;

    return (
      <main className="c-main">
        <Sidebar
          customClass="c-aqueduct-sidebar"
          onToggle={isExpanded => {
            setDashboardCollapsed(!isExpanded);
          }}
          visible={!isDashboardCollapsed}
        >
          <Dashboard type={type} id={id} />
        </Sidebar>
        <div className="map-wrapper">
          <Map className="c-aqueduct-map" />
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string
};

Main.defaultProps = {
  type: 'global',
  id: null
};

export default Main;
