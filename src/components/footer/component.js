import React from 'react';
import PropTypes from 'prop-types';
import { Field, CustomSelect } from 'aqueduct-components';

import { Icon } from 'vizzuality-components';

import { SCOPE } from 'modules/dashboard/constants';

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
  <div className="footer--country-select-icon">
    <Icon className="-small" name="icon-search" />
  </div>
);

const Footer = ({
  scope,
  locationId,
  countries,
  setCountry
}) => {
  if (scope === SCOPE.GENERAL) {
    return null;
  }

  const countryChangeHandler = option => setCountry({data: option.value});

  return (
    <footer className="c-footer">
      <Field
        name="countries-filter"
        label="Explore more"
        className="-bigger"
      >
        <CustomSelect
          theme="light"
          placeholder="Search a country"
          options={countries.list}
          onChange={countryChangeHandler}
          customClass="footer--country-selector"
          styles={countrySelectStyles}
          components={{ IndicatorsContainer }}
          value={countries.value}
        />
      </Field>
    </footer>
  );
};

Footer.propTypes = {
  scope: PropTypes.string.isRequired,
  locationId: PropTypes.string.isRequired,
  countries: PropTypes.shape({}),
  setCountry: PropTypes.func,
};

Footer.defaultProps = {
  setCountry: () => {
    console.log('Country value was changed.');
  }
};

export default Footer;
