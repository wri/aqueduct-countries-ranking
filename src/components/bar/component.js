import React from 'react';
import PropTypes from 'prop-types';

const DashboardWidgets = ({className, height, width, fill}) => {
  return (
    <div
      className={className}
      style={{display: 'inline-block', backgroundColor: fill, height, width}}
    />
  );
};

DashboardWidgets.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string
};

DashboardWidgets.defaultProps = {
  height: '11px',
  width: '11px',
  fill: '#000000'
};

export default DashboardWidgets;
