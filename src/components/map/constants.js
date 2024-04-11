export const BASEMAP_CONFIG = {
  url: process.env['REACT_APP_BASEMAP_TILE_URL'],
  options: { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>' }
};

export const LABEL_LAYER_CONFIG = {
  url: process.env['REACT_APP_BASEMAP_LABEL_URL'],
  options: { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>' }
};

export const BASEMAPS = {
  // Open Street Maps
  osm: {
    id: 'osm',
    value: process.env['REACT_APP_BASEMAP_TILE_URL'],
    label: 'Light',
    options: { attribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank" rel="noopener noreferrer">© Mapbox</a>' }
  },
  satellite: {
    id: 'satellite',
    value: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    label: 'Satellite',
    options: { attribution: '&copy; <a href="https://www.google.com/maps/@15,-2.970703,3z?hl=es" target="_blank">Google</a>' }
  },
  terrain: {
    id: 'terrain',
    value: 'https://api.mapbox.com/styles/v1/resourcewatch/cjhqi456h02pg2rp6w2mwp61c/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmVzb3VyY2V3YXRjaCIsImEiOiJjbHNueDl0NmgwOGg3MmttcjloYjBkZjRsIn0.VDkI_f2sQELKtwGa4FScYA',
    label: 'Terrain',
    options: { attribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a>' }
  },
  hydro: {
    id: 'hydro',
    value: 'https://api.mapbox.com/styles/v1/resourcewatch/cjtr6fhr3060g1fok829tfwm7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmVzb3VyY2V3YXRjaCIsImEiOiJjbHNueDl0NmgwOGg3MmttcjloYjBkZjRsIn0.VDkI_f2sQELKtwGa4FScYA',
    label: 'Hydrography',
    options: { attribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a>' }
  }
};
