import React from 'react';

import CountrySelector from 'components/country-selector';
import IndicatorSelector from 'components/indicator-selector';

const HeaderGeneral = () => {
  return (
    <header className="c-header">
      <div className="header--content">
        <CountrySelector />
        <IndicatorSelector />
      </div>
    </header>
  );
};

export default HeaderGeneral;
