import React, { useEffect, useRef } from 'react';

import HeaderGeneral from 'components/header-general';
import HeaderGeneralFuture from 'components/header-general-future';
import HeaderRegional from 'components/header-regional';
import HeaderRegionalFuture from 'components/header-regional-future';
import DashboardWidgets from 'components/dashboard-widgets';
import Footer from 'components/footer';

import { SCOPE, TABS } from 'modules/dashboard/constants';

const Dashboard = ({
  width,
  setWidth,
  scope,
  tab,
  setTab,
  headerData,
  headerFutureData,
  widget,
  widgetFuture,
  setCountry,
}) => {
  const dashboardEl = useRef(null);
  useEffect(() => {
    const currentWidth = dashboardEl.current.offsetWidth;

    if (currentWidth !== width) {
      setWidth({data: currentWidth});
    }
  });
  const backClickHandler = () => setCountry({data: null});
  const rankingTitle = (scope === SCOPE.GENERAL) ? 'Country Rankings' : 'Sub-national Rankings';

  return (
    <div ref={dashboardEl} className="dashboard">
      <div className='navTags'>
        <div className={`${tab === TABS.BASELINE? 'selectedTag' : ''}`} onClick={() => setTab({ data: TABS.BASELINE})} >BASELINE</div>
        <div className={`${tab === TABS.FUTURE ? 'selectedTag' : ''}`} onClick={() => setTab({ data: TABS.FUTURE})}>FUTURE</div>
      </div>
      { tab === TABS.FUTURE ? 
        <div>
          { scope === SCOPE.GENERAL ?
            <HeaderGeneralFuture /> :
            <HeaderRegionalFuture data={headerFutureData} onBackClick={backClickHandler} />
          }
          <DashboardWidgets data={widgetFuture} title={rankingTitle} />
        </div>
        :
        <div>
          { scope === SCOPE.GENERAL ?
            <HeaderGeneral /> :
            <HeaderRegional data={headerData} onBackClick={backClickHandler} />
          }
          <DashboardWidgets data={widget} title={rankingTitle} />
          <Footer scope={scope} />
        </div>
      }
    </div>
  );
};

export default Dashboard;
