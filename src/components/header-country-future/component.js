import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'vizzuality-components';
import { Field, Timeline, RadioGroup } from 'aqueduct-components';

import IndicatorSelector from 'components/indicator-selector';

const TIMELINE_ITEMS = [
  { label: '2030', value: 2030, selected: true },
  { label: '2050', value: 2050, selected: false },
  { label: '2080', value: 2080, selected: false }
];

const SCENARIOS = [
  {label: "pessimistic", value: 0},
  {label: "business as usual", value: 1},
  {label: "optimistic", value: 2}
]


const HeaderCountry = ({ onBackClick, data }) => {
  const backClickHandler = () => onBackClick();

  const order = ['Irr', 'Dom', 'Ind', 'Tot'];
  const headerIndicators = Object.fromEntries(Object.entries(data.indicators)
    .filter(data => order.includes(data[0]))
    .sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0])));

  return (
    <header className="c-header">
      <div className="header--back-button" onClick={backClickHandler}>
        <Icon className="-small" name="icon-arrow-left" />
        <span className="-uppercase">Country Rankings</span>
      </div>
      <div className="header--content">
      <IndicatorSelector />
        <p className="header--disclaimer">This map is for illustrative purposes and does not imply the expression of any opinion on the part of WRI concerning the legal status of any country or territory, or concerning the delimitation of frontiers or boundaries.</p>

        <br ></br>
        <Field
          name="time-filter"
          label="Timeframe"
          className="-bigger"
          customClass="c-indicator-selector"
          theme="light"
          onMoreInfo={() => {}}
        >
          <div className='header--content'>
            <Timeline
              theme="light"
              items={TIMELINE_ITEMS}
              // onChange={indicatorChangeHandler}
              // customClass={classnames('indicator-selector--select', { [className]: Boolean(className)})}
              // value={indicators.value}
            />
          </div>
        </Field>
        <Field
          name="scenarios"
          label="Scenarios"
          customClass="c-indicator-selector"
          theme="light"
          onMoreInfo={() => {}}
        >
            <RadioGroup
              name="indicator"
              className="-inline"
              items={SCENARIOS}
              onChange={({ value }) => {}}
              selected={0}
              onInfo={(item) => { this.handleModal(item); }}
              theme="light"
            />
        </Field>
      </div>
    </header>
  );
};

HeaderCountry.propTypes = {
  onBackClick: PropTypes.func
};

HeaderCountry.defaultProps = {
  onBackClick: () => {
    console.log('Go back button was pressed.');
  }
};

export default HeaderCountry;
