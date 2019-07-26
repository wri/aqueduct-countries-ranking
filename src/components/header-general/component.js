import React from 'react';

import CountrySelector from 'components/country-selector';
import IndicatorSelector from 'components/indicator-selector';

const HeaderGeneral = () => {
  return (
    <header className="c-header">
      <div className="header--content">
        <CountrySelector />
        <IndicatorSelector />
        <p className="header--disclaimer">This map is for illustrative purposes and does not imply the expression of any opinion on the part of WRI concerning the legal status of any country or territory, or concerning the delimitation of frontiers or boundaries.</p>
      </div>
    </header>
  );
};

export default HeaderGeneral;
