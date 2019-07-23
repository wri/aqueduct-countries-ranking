import React from 'react';
import PropTypes from 'prop-types';

import DropdownButton from 'components/dropdown-button';
import Widget from 'components/widget';
import Bar from 'components/bar';

const downloadOptions = [
  { label: 'Download CSV', value: 'csv' },
  { label: 'Download JSON', value: 'json' }
];

const DashboardWidgets = ({title, buttonText, data, onSelect}) => {
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

  const selectHandler = ({value}) => {
    onSelect({type: value, data});
  };

  return (
    <div className="c-widgets">
      <div className="widgets--header">
        <span className="-uppercase">{title}</span>
        <DropdownButton
          dropdownClassName="-bottom -left"
          options={downloadOptions}
          onSelect={selectHandler}
        >
          <button type="button">{buttonText}</button>
        </DropdownButton>
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
