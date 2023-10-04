import React from 'react';

import { Field, Timeline, RadioGroup, CustomSelect } from 'aqueduct-components';

import CountrySelector from 'components/country-selector';
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


const HeaderGeneralFuture = ({ setModalState }) => {

  const indicatorsInfoHandler = () => {
    setModalState({ isOpen: true, content: 'indicators'});
  };

  return (
    <header className="c-header">
      <div className="header--content">
        <Field
          name="indication-filter"
          label="Water Risk Indicator"
          className="-bigger"
          customClass="c-indicator-selector"
          theme="light"
          onMoreInfo={indicatorsInfoHandler}
        >
          <CustomSelect
            theme="light"
            options={[{ label: "Baseline Water Stress", value: "bws"}]}
            value={"bws"}
          />
        </Field>
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

        <br ></br>
        <br ></br>
        
        <CountrySelector />
      </div>
    </header>
  );
};

export default HeaderGeneralFuture;
