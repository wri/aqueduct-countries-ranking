import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import LegendTypeChoropleth from '../legend-type-choropleth';
import {
  Map as LeMap,
  MapControls,
  ZoomControl,
  Icon,
  Legend,
  LegendListItem,
  LegendItemTypes,
  MapPopup,
  LegendItemToolbar,
  LegendItemButtonOpacity
} from 'vizzuality-components';
import BasemapControl from './basemap-control';
import { PluginLeaflet } from 'layer-manager';
import { LayerManager, Layer } from 'layer-manager/dist/components';

// utils
import { logEvent } from 'utils/analytics';

import { BASEMAPS, LABEL_LAYER_CONFIG } from './constants';

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
    setModalState: PropTypes.func
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

  state = {
    latlng: null,
    interactions: {}
  }

  render() {
    const { className = '', viewport, layers, bounds, basemap, scope, setLayersOpacity, setModalState } = this.props;
    const basemapConfig = {
      ...BASEMAPS[basemap || 'osm'],
      url: BASEMAPS[basemap || 'osm'].value
    };
    const mapProps = {
      customClass: className,
      mapOptions: {
        zoom: viewport.zoom,
        center: {
          lat: viewport.latitude,
          lng: viewport.longitude
        }
      },
      bounds,
      basemap: basemapConfig,
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

    if (scope !== 'COUNTRY') mapProps.label = LABEL_LAYER_CONFIG;

    const shareClickHandler = () => {
      setModalState(true);
      logEvent('[AQ-Country-Ranking] Share', 'user opens share modal', 'click');
    };

    // NOTE: We need to prefix icon name with 'icon-' because Icon from vizzuality
    // does not do that automatically but Icon from aqueduct does.
    return (
      <LeMap {...mapProps}>
        {_map => {
          window.m = _map;

          return (
          <Fragment>
            <LayerManager
                map={_map}
                plugin={PluginLeaflet}
                onReady={() => { /*if (loading) setLoading(false);*/ }}
            >
              {layers.map(layer => (
                <Layer
                  key={layer.id}
                  {...layer}
                  {...!!layer.interactionConfig && !!layer.interactionConfig.output && !!layer.interactionConfig.output.length && {
                    interactivity: (layer.provider === 'carto' || layer.provider === 'cartodb') ? layer.interactionConfig.output.map(o => o.column) : true,
                    events: {
                      click: (e) => {
                        this.setState({
                          interactionData: e.data,
                          latlng: e.latlng
                        })
                      }
                    }
                  }}
                />
              ))}
            </LayerManager>
            <MapControls>
              <ZoomControl map={_map} />
              <BasemapControl />
              <button type="button" onClick={shareClickHandler}><Icon className="-medium" name="icon-share" /></button>
              {/* <Icon className="-medium" name="icon-download" /> */}
            </MapControls>
            <MapPopup
              map={_map}
              latlng={this.state.latlng}
              data={{
                latlng: this.state.latlng,
                interactions: this.state.interactions
              }}
            >
              {
                (this.state.interactionData) ?
                  <div className="c-map-popup">
                    <div className="popup-header">
                      {this.state.interactionData.name_1 ? (
                        <>
                          <h3>{this.state.interactionData.name_1}</h3>
                          <h4>{this.state.interactionData.name_0}</h4>
                        </>
                      ): (
                        <h3>{this.state.interactionData.name_0}</h3>
                      )}
                    </div>
                    <div>{this.state.interactionData.label}</div>
                  </div>
                  : <div>No data</div>
              }
            </MapPopup>
            <div className="c-legend">
              <Legend sortable={false}>
                {layerGroups.map((lg, i) => (
                  <LegendListItem
                    index={i}
                    key={lg.dataset}
                    layerGroup={lg}
                    onChangeOpacity={(_layer, _opacity) => setLayersOpacity(_opacity)}
                    toolbar={(
                      <LegendItemToolbar>
                        <LegendItemButtonOpacity
                          trackStyle={{ backgroundColor: '#2E57B8' }}
                          handleStyle={{ backgroundColor: '#2E57B8' }}
                        />
                      </LegendItemToolbar>
                    )}
                  >
                    <LegendItemTypes>
                      <LegendTypeChoropleth />
                    </LegendItemTypes>
                  </LegendListItem>
                ))}
              </Legend>
            </div>
          </Fragment>
        )}}
      </LeMap>
    );
  }
}

export default Map;
