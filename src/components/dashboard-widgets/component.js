import React from 'react';
import PropTypes from 'prop-types';

import Widget from 'components/widget';
import Bar from 'components/bar';
import {
  palette,
  chartOrder,
  tableClasses
} from './constants';

const DashboardWidgets = ({title, buttonText, data, onSelect}) => {
  if (data.length === 0) {
    return null;
  }

  const headerIndicators = Object.entries(data[0].indicators)
    .filter(data => chartOrder.includes(data[0]))
    .sort((a, b) => chartOrder.indexOf(a[0]) - chartOrder.indexOf(b[0]));

  const indicatorsLegend = headerIndicators.map((data, i) => (
    <div className="widgets--content-legend" key={data}>
      <Bar className="widgets--content-bullet" fill={palette[i]} />
      {data[1].name}
    </div>
  ));

  const chartConfig = {
    fields: chartOrder,
    palette,
    length: value => (value / 5) * 76
  };

  const sortedData = data.sort((a, b) => {
    const {Tot:aTot, Pop:aPop} = a.indicators;
    const {Tot:bTot, Pop:bPop} = b.indicators;
    if (aTot && bTot) {
      return parseInt(aTot) - parseInt(bTot);
    }

    if (aPop && bPop) {
      return parseInt(aPop) - parseInt(bPop);
    }

    return 0;
  });

  return (
    <div className="c-widgets">
      <div className="widgets--header">
        <span className="-uppercase">{title}</span>
        <button type="button" onClick={onSelect}>{buttonText}</button>
      </div>
      <div className="widgets--content-wrapper">
        <div className="widgets--content-header">
          <div className={tableClasses.columns[0]}>Rank</div>
          <div className={tableClasses.columns[1]}>Name</div>
          <div className={tableClasses.columns[2]}>Sectoral Score{indicatorsLegend}</div>
          <div className={tableClasses.columns[3]}>Total Score</div>
        </div>
        <div className="widgets--content-body">
        {sortedData.map((country, index) => {
          return (
              <Widget
                classes={tableClasses}
                key={country.iso}
                rowNumber={index + 1}
                country={country}
                chartConfig={chartConfig}
              />
          );
        })}
        </div>
      </div>
    </div>
  );
};

DashboardWidgets.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

DashboardWidgets.defaultProps = {
  title: 'Water Usage (Score)',
  buttonText: 'Download ranking'
};

export default DashboardWidgets;
