import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'vizzuality-components';
import { CustomSelect } from 'aqueduct-components';

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
  <div className="country-selector--icon">
    <Icon className="-small" name="icon-search" />
  </div>
);

function CountrySelector({
  countries,
  setCountry,
  getCountryBounds
}) {
  const countryChangeHandler = (option) => {
    setCountry({data: option.value});
    getCountryBounds(option.value);
  };

  return (
    <CustomSelect
      theme="light"
      placeholder="Search a country"
      options={countries.list}
      onChange={countryChangeHandler}
      customClass="c-country-selector"
      styles={countrySelectStyles}
      components={{ IndicatorsContainer }}
      value={countries.value}
    />
  );
}

CountrySelector.propTypes = {
  countries: PropTypes.shape({}).isRequired,
  setCountry: PropTypes.func,
};

CountrySelector.defaultProps = {
  setCountry: () => {
    console.log('Country value was changed.');
  }
};

export default CountrySelector;