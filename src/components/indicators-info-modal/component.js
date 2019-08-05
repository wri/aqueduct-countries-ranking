import React from 'react';

export default () => (
  <div className="c-info">
    <div className="info-header">
      <div className="info-titles">
        <span className="info-title">Water Risk Indicator</span>
      </div>
    </div>
    <div className="info-description">
      <dl>
        <dt>Baseline Water Stress</dt><br />
        <dd>Baseline water stress measures the ratio of total water withdrawals to available renewable water supplies. Water withdrawals include domestic, industrial, irrigation and livestock consumptive and non-consumptive uses. Available renewable water supplies include surface and groundwater supplies and considers the impact of upstream consumptive water users and large dams on downstream water availability. Higher values indicate more competition among users.</dd>
        <br />
        <dt>Drought Risk</dt><br />
        <dd>Drought risk measures where droughts are likely to occur, the population and assets exposed, and the vulnerability of the population and assets to suffering adverse effects. Higher values indicate higher risk of drought.</dd>
        <br />
        <dt>Coastal Flood Risk</dt><br />
        <dd>Coastal flood risk measures the percentage of population expected to be affected by coastal flooding in an average year, accounting for existing flood protection standards. Higher values indicate greater proportion of the population is expected to be impacted by coastal floods.</dd>
        <br />
        <dt>Source: </dt>
        <dd><a href="https://www.wri.org/publication/aqueduct-30">Aqueduct 2019</a> aggregated to a country and sub-national level using the methods described in Aqueduct <a href="https://www.wri.org/publication/aqueduct-country-and-river-basin-rankings">2013</a></dd>
      </dl>
    </div>
  </div>
);
