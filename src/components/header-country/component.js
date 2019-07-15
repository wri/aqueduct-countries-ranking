import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'vizzuality-components';


import IndicatorSelector from 'components/indicator-selector';

const HeaderCountry = ({ onBackClick, country }) => {
  const backClickHandler = () => onBackClick();
  return (
    <header className="c-header">
      <div className="header--back-button" onClick={backClickHandler}>
        <Icon className="-small" name="icon-arrow-left" />
        <span className="-uppercase">Country Rankings</span>
      </div>
      <div className="header--content">
        <div>
          <h1>{country[0].country}</h1>
          <div className="header--indicators">
            <span className="header--indicator"><span className="-bold"></span></span>
          </div>
        </div>
        <IndicatorSelector className="header--indicator-selector"/>
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
