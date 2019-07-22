import React from 'react';
import PropTypes from 'prop-types';

import Widget from 'components/widget';
import Bar from 'components/bar';

const DashboardWidgets = ({title, buttonText, data}) => {
  if (data.length === 0) {
    return null;
  }

  const palette = ['#3FA989', '#00A0E1', '#4A596A'];
  const chartOrder = ['Irr', 'Dom', 'Ind', 'Pop'];

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

  return (
    <div className="c-widgets">
      <div className="widgets--header">
        <span className="-uppercase">{title}</span>
        <button type="button">{buttonText}</button>
      </div>
      <div className="widgets--content-wrapper">
        <div className="widgets--content-header">
          <div>{indicatorsLegend}</div>
          <div>Total</div>
        </div>
        <div className="widgets--content-body">
        {data.map((country, index) => {
          return (
              <Widget
                className="widgets--content-row"
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
