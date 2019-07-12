import React, { useEffect } from 'react';

import { INDICATOR_CATEGORIES }  from 'services/wri-service/constants';
import Header from 'components/header';
import Footer from 'components/footer';

// todo: This is a widget, but not for this task, just a demo for now.
function renderWidget(widgetState) {
  const { isLoading, isLoaded, data } = widgetState;

  if (!isLoading) {
    if (!isLoaded) {
      return (
        <h1>Loading will start soon</h1>
      );
    } else {
      return (
        <div style={{
          maxHeight: '150px',
          overflowY: 'scroll'
        }}>
          <h2>Here will be the widget. But for now...</h2>
          {Object.entries(data).map((country, index) => {
            const countryWidget = country[1].reduce((acc, entry) => ({
              ...acc,
              [entry.category]: {
                score: entry.score,
                rank: entry.rank
              }
            }), { name: country[1][0].country });

            return (
              <div key={country[0]}>
                <b>{index + 1}. </b>
                <span>{countryWidget.name}</span>
                <br />
                <div>
                  <span>{`${INDICATOR_CATEGORIES['Dom']} :${countryWidget['Dom'].score}`}</span><br />
                  <span>{`${INDICATOR_CATEGORIES['Ind']} :${countryWidget['Ind'].score}`}</span><br />
                  <span>{`${INDICATOR_CATEGORIES['Irr']} :${countryWidget['Irr'].score}`}</span><br />
                  <span>{`${INDICATOR_CATEGORIES['Tot']} :${countryWidget['Tot'].rank}`}</span>
                  </div>
              </div>
            );
          })}
        </div>
      );
    }
  } else {
    return (
      <h1>Loading...</h1>
    );
  }
}

const Dashboard = ({
  areCountriesReady,
  getCountries,
  areIndicatorsReady,
  getIndicators,
  getWidgetData,
  widget
}) => {
  useEffect(() => {
    if (!areCountriesReady) {
      getCountries();
    }
    if (!areIndicatorsReady) {
      getIndicators();
    } else {
    }
    if (widget.isNew) {
      getWidgetData();
    }
  });

  return (
    <div className="dashboard">
      <Header />
      {renderWidget(widget)}
      <Footer />
    </div>
  );
};

export default Dashboard;
