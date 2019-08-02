import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';

import { Field, CustomSelect } from 'aqueduct-components';

// utils
import { logEvent } from 'utils/analytics';

function IndicatorSelector({
  indicators,
  setIndicator,
  className
}) {
  const indicatorChangeHandler = (option) => {
    setIndicator({data: option.value})
    logEvent('[AQ-Country-Ranking] Indicators', 'user selects an indicator', option.label);
  };

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