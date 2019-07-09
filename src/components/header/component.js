import React from 'react';
import PropTypes from 'prop-types';
import { Field, CustomSelect } from 'aqueduct-components';

import { Icon } from 'vizzuality-components';


const options = [
  { label: 'Uno', value: 'uno' },
  { label: 'Dos', value: 'dos' },
  { label: 'Tres', value: 'tres' }
];

const countrySelectStyles = {
  container: styles => ({
    ...styles,
    height: '40px'
  }),
  valueContainer: styles => ({
    ...styles,
    height: '40px',
    marginLeft: '16px'
  }),
  option: styles => ({
    ...styles,
    backgroundColor: '#f00'
  })
};

const IndicatorsContainer = () => (
  <div className="header--country-select-icon">
    <Icon className="-small" name="icon-search" />
  </div>
);

const Header = ({ setCountry, isCountrySelected }) => (
  <header className="c-header">
    <CustomSelect
      theme="light"
      placeholder="Search a country"
      options={options}
      onChange={setCountry}
      customClass="header--country-selector"
      styles={countrySelectStyles}
      components={{ IndicatorsContainer }}
    />
    <Field
      name="indication-filter"
      label="Water Risk Indicator"
      className="-bigger"
    >
      <CustomSelect
        theme="light"
        options={options}
        onChange={setCountry}
        customClass="header--indicator-selector"
      />
    </Field>
  </header>
);

Header.propTypes = {
  setCountry: PropTypes.func,
  isCountrySelected: PropTypes.bool
};

Header.defaultProps = {
  setCountry: () => {},
  isCountrySelected: false
};

export default Header;
