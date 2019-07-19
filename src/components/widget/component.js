import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { INDICATOR_CATEGORIES }  from 'services/wri-service/constants';

const Widget = ({className, rowNumber, country}) => {
  return (
    <div className={classnames('c-widget', { [className]: Boolean(className)})}>
      <div className="widget--row-number">{rowNumber}</div>
      <div className="widget--name">{country.name}</div>
      <div className="widget--chart">
        <div>
          <span>{`${INDICATOR_CATEGORIES['Dom']} :${country.indicators['Dom'].score}`}</span><br />
          <span>{`${INDICATOR_CATEGORIES['Ind']} :${country.indicators['Ind'].score}`}</span><br />
          <span>{`${INDICATOR_CATEGORIES['Irr']} :${country.indicators['Irr'].score}`}</span><br />
        </div>
      </div>
      <div className="widget--total">{country.indicators['Tot'].score}</div>
    </div>
  );
};

Widget.propTypes = {
  rowNumber: PropTypes.number.isRequired,
  country: PropTypes.shape({}).isRequired
};

export default Widget;
