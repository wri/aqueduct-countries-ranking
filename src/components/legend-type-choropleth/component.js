import React from 'react';
import PropTypes from 'prop-types';

class LegendTypeChoropleth extends React.PureComponent {
  static propTypes = {
    activeLayer: PropTypes.object
  }

  static defaultProps = {
    activeLayer: {}
  }

  render() {
    const { activeLayer } = this.props;
    const { legendConfig } = activeLayer;

    if (!legendConfig || legendConfig.type !== 'choropleth') {
      return null;
    }

    return (
      <div>
        <ul className="c-legend-type-choropleth">
          {legendConfig.items.map(({ name, value, color }) => (
            <li key={`legend-choropleth-item-${name || value}`}>
              <div className="icon-choropleth" style={{ backgroundColor: color }} />
              <span className="name">
                {name}
              </span>
              <span className="name">
                {value}
              </span>
            </li>
          ))}
        </ul>
        {legendConfig.disclaimer && (
          <div className="graph -basic -disclaimer">
            <div className="graph-list">
              {legendConfig.disclaimer.map(item => (
                <div className="graph-list-item" key={item.name}>
                  <span className="color" style={{ background: item.color }} />
                  <span className="label">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LegendTypeChoropleth;
