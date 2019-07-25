import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'vizzuality-components';


import IndicatorSelector from 'components/indicator-selector';

const HeaderCountry = ({ onBackClick, data }) => {
  const backClickHandler = () => onBackClick();

  return (
    <header className="c-header">
      <div className="header--back-button" onClick={backClickHandler}>
        <Icon className="-small" name="icon-arrow-left" />
        <span className="-uppercase">Country Rankings</span>
      </div>
      <div className="header--content">
        <div>
          <h1>{data.name}</h1>
          <ul className="header--indicators">
            {Object.entries(data.indicators).map(indicator => (
              <li className="header--indicator" key={indicator[0]}>
                {indicator[1].name}: {indicator[1].score}
              </li>
            ))}
          </ul>
        </div>
        <IndicatorSelector className="header--indicator-selector"/>
        <p className="header--disclaimer">This map is for illustrative purposes and does not imply the expression of any opinion on the part of WRI concerning the legal status of any country or territory, or concerning the delimitation of frontiers or boundaries.</p>
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
