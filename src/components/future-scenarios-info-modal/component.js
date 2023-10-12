import React from 'react';

export default () => (
  <div className="c-info">
    <div className="info-header">
      <div className="info-titles">
        <span className="info-title">Scenarios</span>
      </div>
    </div>
    <div className="info-description">
      <dl>
        <dt>Optimistic</dt><br />
        <dd>The "optimistic" scenario (SSP1 RCP2.6) represents a future that limits the rise in average global surface temperatures by 2100 to 1.3°C to 2.4°C compared to preindustrial levels (1850-1900). SSP1 is characterized by sustainable socioeconomic growth: stringent environmental regulations and effective institutions, rapid technological change and improved water use efficiencies, and low population growth.</dd>
        <br />
        <dt>Business as usual</dt><br />
        <dd>The "business as usual" scenario (SSP3 RCP7.0) represents a middle-of-the-road future where temperatures increase by 2.8°C to 4.6°C by 2100. SSP3 is a socioeconomic scenario characterized by regional competition and inequality, including slow economic growth, weak governance and institutions, low investment in the environment and technology, and high population growth, especially in developing countries.</dd>
        <br />
        <dt>Pessimistic</dt><br />
        <dd>The "pessimistic" scenario (SSP5 RCP8.5) represents a future where temperatures increase up to 3.3°C to 5.7°C by 2100. SSP5 describes fossil-fueled development: rapid economic growth and globalization powered by carbon-intensive energy, strong institutions with high investment in education and technology but a lack of global environmental concern, and the population peaking and declining in the 21st century.</dd>
        <br />
        <dt>Source: </dt>
        <dd><a href="https://doi.org/10.46830/writn.23.00061">Aqueduct 4.0</a></dd>
      </dl>
    </div>
  </div>
);
