import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Map as LeMap } from 'vizzuality-components';

import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';

class Map extends Component {
  static propTypes = {
    children: PropTypes.func,
    viewport: PropTypes.shape({}),
    bounds: PropTypes.shape({
      bbox: PropTypes.array,
      options: PropTypes.shape({})
    }),
    dragPan: PropTypes.bool,
    dragRotate: PropTypes.bool, // A boolean that allows rotating
    setMapViewport: PropTypes.func,
    onViewportChange: PropTypes.func,
    onLoad: PropTypes.func,
    onStyleLoad: PropTypes.func
  }

  static defaultProps = {
    children: null,
    viewport: { zoom: 2, lat: 0, lng: 0 },
    bounds: {},
    dragPan: true,
    dragRotate: true,
    onViewportChange: () => {},
    onLoad: () => {},
    onStyleLoad: () => {},
    setMapViewport: () => {}
  }

  componentDidMount() {
    const { bounds } = this.props;

    if (!isEmpty(bounds) && !!bounds.bbox) {
      this.fitBounds();
    }
  }

  componentDidUpdate(prevProps) {
    const { bounds: prevBounds } = prevProps;
    const { bounds } = this.props;

    if (!isEmpty(bounds) && !isEqual(bounds, prevBounds)) {
      this.fitBounds();
    }
  }

  render() {
    const { className = '' } = this.props;
    const mapProps = {
      customClass: className,
      mapOptions: {
        zoom: 12,
        center: {
          lat: 41.145218001222204,
          lng: -8.61132408966133
        }
      },
      events: {
        zoomend: (e, map) => { console.info(e, map); },
        dragend: (e, map) => { console.info(e, map); }
      }
    };

    return (
      <LeMap {...mapProps}>
        {map => {
          console.log(map);
        }}
      </LeMap>
    );
  }
}

export default Map;
