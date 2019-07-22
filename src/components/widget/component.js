import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Bar from 'components/bar';

const Chart = ({indicators, config: {fields, palette, length}}) => {
  if (!indicators) {
    return null;
  }

  const fill = (palette, index) => palette[index % palette.length];

  return (
    <Fragment>
      {fields.map((field, index) => {
        if (!indicators[field]) {
          return null;
        }

        const value = indicators[field].score;

        return (
          <div key={field}>
            <span className='widget--chart-text'>{`${value}`}</span>
            <Bar fill={fill(palette, index)} width={`${length(value)}px`} />
          </div>
        );
      })}
    </Fragment>
  );
};

const Widget = ({className, rowNumber, country, chartConfig}) => {
  return (
    <div className={classnames('c-widget', { [className]: Boolean(className)})}>
      <div className="widget--row-number">{rowNumber}</div>
      <div className="widget--name">{country.name}</div>
      <div className="widget--chart">
        <Chart indicators={country.indicators} config={chartConfig} />
      </div>
      <div className="widget--total">{country.indicators && country.indicators['Tot'] && country.indicators['Tot'].score}</div>
    </div>
  );
};

Widget.propTypes = {
  rowNumber: PropTypes.number.isRequired,
  country: PropTypes.shape({}).isRequired
};

export default Widget;
