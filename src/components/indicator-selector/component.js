import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';

import { Field, CustomSelect } from 'aqueduct-components';

function IndicatorSelector({
  indicators,
  setIndicator,
  className
}) {
  const indicatorChangeHandler = option => setIndicator({data: option.value});

  return (
    <Field
      name="indication-filter"
      label="Select Water Risk Indicator"
      className="-bigger"
    >
      <CustomSelect
        theme="light"
        options={indicators.list}
        onChange={indicatorChangeHandler}
        customClass={classnames('c-indicator-selector', { [className]: Boolean(className)})}
        value={indicators.value}
      />
    </Field>
  );
}

IndicatorSelector.propTypes = {
  indicators: PropTypes.shape({}).isRequired,
  setIndicator: PropTypes.func,
};

IndicatorSelector.defaultProps = {
  setIndicator: () => {
    console.log('Indicator value was changed.');
  }
};

export default IndicatorSelector;