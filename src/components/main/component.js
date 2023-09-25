import React from 'react';
import { Sidebar } from 'aqueduct-components';

import ModalManager from 'components/modal-manager';
import ShareModal from 'components/share-modal';
import IndicatorsInfoModal from 'components/indicators-info-modal';
import Dashboard from 'components/dashboard';
import Map from 'components/map';

function getModalContent(content) {
  switch(content) {
    case 'share':
      return <ShareModal />;
    case 'indicators':
      return <IndicatorsInfoModal />;
    default:
      return <></>;
  }
}

const Main = ({ isDashboardCollapsed, isModalOpen, modalContent, setDashboardCollapsed, setModalState}) => {
  const closeModalHandler = () => setModalState({ isOpen: false, content: null });
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
        {getModalContent(modalContent)}
      </ModalManager>
    </main>
  );
}

export default Main;
