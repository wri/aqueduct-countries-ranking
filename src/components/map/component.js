import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Map as LeMap,
  MapControls,
  ZoomControl,
  Icon,
  Legend,
  LegendListItem,
  LegendItemTypes
} from 'vizzuality-components';

import { PluginLeaflet } from 'layer-manager';
import { LayerManager, Layer } from 'layer-manager/dist/components';

import { BASEMAP_CONFIG, LABEL_LAYER_CONFIG } from './constants';

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
    onStyleLoad: PropTypes.func,
    layers: PropTypes.array,
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
    setMapViewport: () => {},
    layers: []
  }

  // componentDidMount() {
  //   const { bounds } = this.props;

  //   if (!isEmpty(bounds) && !!bounds.bbox) {
  //     this.fitBounds();
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   const { bounds: prevBounds } = prevProps;
  //   const { bounds } = this.props;

  //   if (!isEmpty(bounds) && !isEqual(bounds, prevBounds)) {
  //     this.fitBounds();
  //   }
  // }

  render() {
    const { className = '', viewport, layers, bounds } = this.props;
    const mapProps = {
      customClass: className,
      mapOptions: {
        zoom: viewport.zoom,
        center: {
          lat: viewport.latitude,
          lng: viewport.longitude
        }
      },
      basemap: BASEMAP_CONFIG,
      label: LABEL_LAYER_CONFIG,
      events: {
        zoomend: (e, map) => { /*console.info(e, map);*/ },
        dragend: (e, map) => { /*console.info(e, map);*/ }
      }
    };
    
    const layerGroups = (layers && layers.length) ? layers.map(l => ({
      name: l.name,
      dataset: l.dataset,
      layers: [{...l, active: true}]
    })) : [];

    // NOTE: We need to prefix icon name with 'icon-' because Icon from vizzuality
    // does not do that automatically but Icon from aqueduct does.
    return (
      <LeMap {...mapProps}>
        {_map => (
          <Fragment>
            <LayerManager
                map={_map}
                plugin={PluginLeaflet}
                onReady={() => { /*if (loading) setLoading(false);*/ }}
            >
              {layers.map(layer => (
                <Layer key={layer.id} {...layer} />
              ))}
            </LayerManager>
            <MapControls>
              <ZoomControl map={_map} />
              <Icon className="-medium" name="icon-share" />
              {/* <Icon className="-medium" name="icon-download" /> */}
            </MapControls>
            <div className="c-legend">
              <Legend sortable={false}>
                {layerGroups.map((lg, i) => (
                  <LegendListItem
                    index={i}
                    key={lg.dataset}
                    layerGroup={lg}
                  >
                    <LegendItemTypes />
                  </LegendListItem>
                ))}
              </Legend>
            </div>
          </Fragment>
        )}
      </LeMap>
    );
  }
}

export default Map;
