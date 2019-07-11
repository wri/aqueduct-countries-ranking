import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, CustomSelect } from 'aqueduct-components';

import { Icon } from 'vizzuality-components';

const countrySelectStyles = {
  container: styles => ({
    ...styles,
    height: '40px'
  }),
  valueContainer: styles => ({
    ...styles,
    height: '40px',
    marginLeft: '16px'
  })
};

const IndicatorsContainer = () => (
  <div className="header--country-select-icon">
    <Icon className="-small" name="icon-search" />
  </div>
);

const Header = ({
  getCountries,
  getIndicators,
  countries,
  countryValue,
  setCountryValue,
  indicators,
  indicatorValue,
  setIndicatorValue
}) => {
  useEffect(() => {
    if (countries.length === 0) {
      getCountries();
    }
    if (indicators.length === 0) {
      getIndicators();
    }
  });

  return (
    <header className="c-header">
      <CustomSelect
        theme="light"
        placeholder="Search a country"
        options={countries}
        onChange={option => setCountryValue({countryValue: option.value})}
        customClass="header--country-selector"
        styles={countrySelectStyles}
        components={{ IndicatorsContainer }}
        value={countryValue}
      />
      <Field
        name="indication-filter"
        label="Water Risk Indicator"
        className="-bigger"
      >
        <CustomSelect
          theme="light"
          options={indicators}
          onChange={setIndicatorValue}
          customClass="header--indicator-selector"
          value={indicatorValue}
        />
      </Field>
    </header>
  ); 
}

Header.propTypes = {
  getCountries: PropTypes.func,
  getIndicators: PropTypes.func,
  setCountry: PropTypes.func,
  setIndicator: PropTypes.func,
  countryValue: PropTypes.string,
  indicatorValue: PropTypes.string
};

Header.defaultProps = {
  getCountries: () => {},
  getIndicators: () => {},
  setCountry: () => {
    console.log('Country value was changed.');
  },
  setIndicator: () => {
    console.log('Indicator value was changed.');
  }
};

export default Header;
