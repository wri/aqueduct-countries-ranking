import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'vizzuality-components';
import { Field, Timeline, CustomSelect, RadioGroup } from 'aqueduct-components';

const HeaderRegional = ({ onBackClick, data, setModalState, setPeriod, period, periods, scenario, scenarios, setScenario, loadDashboardRegionalFutureData, loadDashboardCountryFutureData }) => {
  const backClickHandler = () => onBackClick();

  const order = ['Irr', 'Dom', 'Ind', 'Tot'];
  const headerIndicators = Object.fromEntries(Object.entries(data.indicators)
    .filter(data => order.includes(data[0]))
    .sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0])));

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
    loadDashboardRegionalFutureData();
    loadDashboardCountryFutureData();
  }, [scenario, period, loadDashboardRegionalFutureData, loadDashboardCountryFutureData]);

  return (
    <header className="c-header">
      <div className="header--back-button" onClick={backClickHandler}>
        <Icon className="-small" name="icon-arrow-left" />
        <span className="-uppercase">Search another country</span>
      </div>
      <div className="header--content pb-0">
        <div className="header--info">
          <h1>{data.name}</h1>
          <Field
            name="header-indicators"
            label="Summary Results"
            className="-bigger"
          >
            <ul className="header--indicators">
              {Object.entries(headerIndicators).map(indicator => (
                <li className="header--indicator" key={indicator[0]}>
                  {indicator[1].name}: {indicator[1].score}
                </li>
              ))}
            </ul>
          </Field>
        </div>
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

        <br ></br>
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
        <p className="header--disclaimer">This map is for illustrative purposes and does not imply the expression of any opinion on the part of WRI concerning the legal status of any country or territory, or concerning the delimitation of frontiers or boundaries.</p>
        <br ></br>
      </div>
    </header>
  );
};

HeaderRegional.propTypes = {
  onBackClick: PropTypes.func
};

HeaderRegional.defaultProps = {
  onBackClick: () => {
    console.log('Go back button was pressed.');
  }
};

export default HeaderRegional;
