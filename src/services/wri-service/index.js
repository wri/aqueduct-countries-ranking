import axios from 'axios';
import { get } from 'lodash';

import serializer from './wri-json-api-serializer';
import aggregateByKey from './aggregate-by-key';
import {
  ERRORS
} from './constants';

class WRIService {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  fetchLayersFromDataset(id, params = {}) {
    return this.client.get(`/dataset/${id}/layer`, { params })
      .then(response => {
        const { status, statusText, data } = response;
        if (status >= 400) throw new Error(statusText);
        return serializer(data);
      });
  }

  fetchDatasetsLayers(datasets) {
    // We are unzipping here, you can check https://lodash.com/docs/4.17.11#unzip
    // It is better this way because Object entries, values and keys can be order inconsistent
    const [ datasetNames, datasetPromises ] = Object.entries(datasets).reduce((acc, item) => [
      [...acc[0], item[0]],
      [...acc[1], this.fetchLayersFromDataset(item[1])]
    ], [[], []]);

    return axios.all(datasetPromises)
      .then(response => {
        return datasetNames.reduce((acc, name, index) => ({
          ...acc,
          [name]: response[index]
        }), {});
      });
  }

  /**
   * 
   * @param {Object} options
   * @param {Object} options.dataset - Widget dataset
   * @param {string} options.dataset.id - Widget dataset id
   * @param {Object} options.widget - Widget object
   * @param {string} options.widget.id - Widget id
   * @param {Object} options.widget.params - Widget request parameters
   * @param {Object} options.params - Request parameters
   */
  fetchDatasetWidgets(options) {
    const widgetId = get(options, 'widget.id', null);
    const widgetParams = get(options, 'widget.params', null);
    const params = get(options, 'params', {});

    if (widgetId && widgetParams) {
      return this.client(`/widget/${widgetId}`, params)
        .then(response => {
          const { status, statusText, data } = response;
          if (status >= 400) throw new Error(statusText);
          return serializer(data);
        })
        .then(widgetData => {
          const url = this.processWidgetData(widgetData, widgetParams);
          return axios.get(url);
        })
        .then(response => {
          const { status, statusText, data } = response;
          if (status >= 400) throw new Error(statusText);
          return aggregateByKey(data.rows, options.indexKey, row => ({
            country: row.country,
            category: row.weight,
            score: row.score,
            rank: row.score_ranked
          }));
        });
    }

    throw new Error(ERRORS.MISSING_WIDGET_REQUEST_PARAMETERS);
  }

  /**
   * processWidgetData - Process widget data as returned from WRI service.
   * @param {Object} widgetData
   * @param {Object} widgetData.widgetConfig
   * @param {Array} widgetData.widgetConfig.data - An array of objects with url property for querying Carto.
   * @param {Array} widgetData.widgetConfig.params_config - An array of parameters to replace in widget url's.
   * @param {Array} widgetParams - Array of parameters, must match the ones requested in paramsConfig.
   */
  processWidgetData(widgetData, widgetParams) {
    const { data, params_config: paramsConfig } = widgetData.widgetConfig;
    return paramsConfig.reduce((acc, param) => {
      const { key } = param;
      if (param.required && !widgetParams[key]) {
        throw new Error(ERRORS.MISSING_REQUIRED_PARAMETER);
      }

      return acc.replace(`{{${key}}}`, `'${widgetParams[key]}'`);
    }, data[0].url);
  }
}

export const service = new WRIService();
export default service;
