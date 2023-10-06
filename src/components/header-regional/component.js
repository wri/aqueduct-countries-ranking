import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'vizzuality-components';
import { Field } from 'aqueduct-components';

import IndicatorSelector from 'components/indicator-selector';

const HeaderCountry = ({ onBackClick, data }) => {
  const backClickHandler = () => onBackClick();

  const order = ['Irr', 'Dom', 'Ind', 'Tot'];
  const headerIndicators = Object.fromEntries(Object.entries(data.indicators)
    .filter(data => order.includes(data[0]))
    .sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0])));

  return (
    <header className="c-header">
      <div className="header--back-button" onClick={backClickHandler}>
        <Icon className="-small" name="icon-arrow-left" />
        <span className="-uppercase">Country Rankings</span>
      </div>
      <div className="header--content">
        <div className="header--info">
          <h1>{data.name}</h1>
          <Field
            name="header-indicators"
            label="Summary Results"
            className="-bigger"
          >
            <ul className="header--indicators">
              {Object.entries(headerIndicators).map(indicator => (
                <li className="header--indicator" key={indicator[0]}>
                  {indicator[1].name}: {indicator[1].score}
                </li>
              ))}
            </ul>
          </Field>
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
