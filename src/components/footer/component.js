import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'aqueduct-components';

import { SCOPE } from 'modules/dashboard/constants';
import CountrySelector from 'components/country-selector';

const Footer = ({
  scope
}) => {
  if (scope === SCOPE.GENERAL) {
    return null;
  }

  return (
    <footer className="c-footer">
      <Field
        name="countries-filter"
        label="Explore more"
        className="-bigger"
      >
        <CountrySelector />
      </Field>
    </footer>
  );
};

Footer.propTypes = {
  scope: PropTypes.string.isRequired
};

export default Footer;
