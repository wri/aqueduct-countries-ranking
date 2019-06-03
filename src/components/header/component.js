import React from 'react';
import { Field, CustomSelect } from 'aqueduct-components';

const options = [
  { label: 'Uno', value: 'uno' },
  { label: 'Dos', value: 'dos' },
  { label: 'Tres', value: 'tres' }
];

const Header = ({setCountry}) => (
  <header className="c-header">
    <Field
      name="location-filter"
      className="-bigger"
    >
      <CustomSelect
        theme="dark"
        placeholder="Search a country"
        options={options}
        onChange={setCountry}
      />
    </Field>
    <Field
      name="indication-filter"
      label="Water Risk Indicator"
      className="-bigger"
    >
      <CustomSelect
        theme="dark"
        placeholder="Search a country"
        options={options}
        onChange={setCountry}
      />
    </Field>
  </header>
);

export default Header;
