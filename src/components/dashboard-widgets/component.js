import React from 'react';

import { INDICATOR_CATEGORIES }  from 'services/wri-service/constants';

const DashboardWidgets = ({data}) => {
  return (
    <div style={{ overflowY: 'scroll' }}>
      <h2>Here will be the widget. But for now...</h2>
      {data.map((country, index) => {
        return (
          <div key={country.iso}>
            <b>{index + 1}. </b>
            <span>{country.name}</span>
            <br />
            <div>
              <span>{`${INDICATOR_CATEGORIES['Dom']} :${country.indicators['Dom'].score}`}</span><br />
              <span>{`${INDICATOR_CATEGORIES['Ind']} :${country.indicators['Ind'].score}`}</span><br />
              <span>{`${INDICATOR_CATEGORIES['Irr']} :${country.indicators['Irr'].score}`}</span><br />
              <span>{`${INDICATOR_CATEGORIES['Tot']} :${country.indicators['Tot'].rank}`}</span>
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardWidgets;
