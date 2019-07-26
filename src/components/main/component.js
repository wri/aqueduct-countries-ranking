import React from 'react';
import { Sidebar } from 'aqueduct-components';

import ModalManager from 'components/modal-manager';
import ShareModal from 'components/share-modal';
import Dashboard from 'components/dashboard';
import Map from 'components/map';

const Main = ({ isDashboardCollapsed, isModalOpen, setDashboardCollapsed, setModalState}) => {
  const closeModalHandler = () => setModalState(false);
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
      <ModalManager isOpen={isModalOpen} appElement="#root" onRequestClose={closeModalHandler}>
        <ShareModal />
      </ModalManager>
    </main>
  );
}

export default Main;
