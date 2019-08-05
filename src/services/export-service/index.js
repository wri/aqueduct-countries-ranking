import json2csv from 'json2csv';

class ExportService {
  saveAsJSON(data) {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
    this.triggerDownload('dataset.json', dataStr);
  }

  saveAsCSV(data) {
    const flattenedData = data.map(row => {
      const {indicators, ...opts} = row;

      if (!indicators) {
        return {...opts};
      }

      return {
        ...opts,
        ...Object.fromEntries(
          Object.entries(row.indicators).flatMap(
            entry => Object.entries(entry[1]).map(
              feat => [`${entry[0]}_${feat[0]}`,feat[1]]
            )
          )
        )
      };
    });

    const fields = Object.keys(flattenedData[0]);
    
    const csv = json2csv.parse(flattenedData, { fields });
    const dataStr = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    this.triggerDownload('dataset.csv', dataStr);
  }

  /**
   * Save a static file
   */
  saveRankings() {
    const dataStr = `${process.env.PUBLIC_URL}/Aqueduct30_Rankings_V01.xlsx`;
    this.triggerDownload('Aqueduct30_Rankings_V01.xlsx', dataStr);
  }
  
  /**
   * Trigger download
   * @param {string} name 
   * @param {string} dataStr 
   */
  triggerDownload(name, dataStr) {
    const el = document.createElement('a');
    el.setAttribute('href', dataStr);
    el.setAttribute('download', name);
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
  }
}

export const service = new ExportService();
export default service;