import React from 'react';

export default () => (
  <div className="c-info">
    <div className="info-header">
      <div className="info-titles">
        <span className="info-title">Timeframe</span>
      </div>
    </div>
    <div className="info-description">
      <dl>
        <dt>Description</dt><br />
        <dd>
          Each year represents the long-term trend over a 30 year period.
        </dd>
        <dd>
          2030: 2015-2045
        </dd>
        <dd>
          2050: 2035-2065
        </dd>
        <dd>
          2080: 2065-2095
        </dd>
        <br />
        <dt>Source: </dt>
        <dd><a href="https://doi.org/10.46830/writn.23.00061">Aqueduct 4.0</a></dd>
      </dl>
    </div>
  </div>
);
