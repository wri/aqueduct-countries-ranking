import React, { useEffect } from 'react';

import { Field, Timeline, CustomSelect, RadioGroup } from 'aqueduct-components';

import CountrySelector from 'components/country-selector';

const HeaderGeneralFuture = ({ setModalState, setPeriod, period, periods, scenario, scenarios, setScenario, loadDashboardCountryFutureData }) => {

  const indicatorsInfoHandler = () => {
    setModalState({ isOpen: true, content: 'indicators'});
  };

  const periodChangeHandler = (p) => {
    setPeriod({ data: p })
  }

  const scenarioChangeHandler = (s) => {
    setScenario({ data: s})
  }

  useEffect(() => {
    loadDashboardCountryFutureData();
  }, [scenario, period, loadDashboardCountryFutureData]);

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
              items={periods}
              onChange={periodChangeHandler}
              value={period}
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
              name="scenarios"
              className="-inline"
              items={scenarios}
              onChange={scenarioChangeHandler}
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
