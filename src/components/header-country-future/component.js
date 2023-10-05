import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'vizzuality-components';

const HeaderCountry = ({ onBackClick }) => {
  const backClickHandler = () => onBackClick();

  return (
    <header className="c-header">
      <div className="header--back-button" onClick={backClickHandler}>
        <Icon className="-small" name="icon-arrow-left" />
        <span className="-uppercase">Country Rankings</span>
      </div>
    </header>
  );
};

HeaderCountry.propTypes = {
  onBackClick: PropTypes.func
};

HeaderCountry.defaultProps = {
  onBackClick: () => {
    console.log('Go back button was pressed.');
  }
};

export default HeaderCountry;
