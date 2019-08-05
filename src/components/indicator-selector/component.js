import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';

import { Field, CustomSelect } from 'aqueduct-components';

// utils
import { logEvent } from 'utils/analytics';

function IndicatorSelector({
  indicators,
  setIndicator,
  setModalState,
  className
}) {
  const indicatorChangeHandler = (option) => {
    setIndicator({data: option.value})
    logEvent('[AQ-Country-Ranking] Indicators', 'user selects an indicator', option.label);
  };

  
  const indicatorsInfoHandler = () => {
    setModalState({ isOpen: true, content: 'indicators'});
    // logEvent('[AQ-Country-Ranking] Share', 'user opens share modal', 'click');
  };


  return (
    <Field
      name="indication-filter"
      label="Select Water Risk Indicator"
      className="-bigger"
      customClass="c-indicator-selector"
      theme="light"
      onMoreInfo={indicatorsInfoHandler}
    >
      <CustomSelect
        theme="light"
        options={indicators.list}
        onChange={indicatorChangeHandler}
        customClass={classnames('indicator-selector--select', { [className]: Boolean(className)})}
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