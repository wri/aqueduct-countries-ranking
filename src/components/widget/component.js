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

const Widget = ({classes, rowNumber, country, chartConfig}) => {
  return (
    <div className={classnames('c-widget', { [classes.row]: Boolean(classes.row)})}>
      <div className={classes.columns[0]}>{rowNumber}</div>
      <div className={classes.columns[1]}>{country.name}</div>
      <div className={classes.columns[2]}>
        <Chart indicators={country.indicators} config={chartConfig} />
      </div>
      <div className={classes.columns[3]}>{country.indicators && country.indicators['Tot'] && country.indicators['Tot'].score}</div>
    </div>
  );
};

Widget.propTypes = {
  rowNumber: PropTypes.number.isRequired,
  country: PropTypes.shape({}).isRequired
};

export default Widget;
