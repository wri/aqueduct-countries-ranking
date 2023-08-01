import get from 'lodash/get';

/**
 * aggregateByKey
 * @param {Array} collection - The collection of objects to be aggregated. 
 * @param {string} key - The key used to aggregate objects.
 * @param {function} mapFn - A map function for each of the objects in the collection.
 */
export function aggregateByKey(collection, key, mapFn = x => x) {
  // todo: could stats be done better by flattening and using Math functions?
  const stats = {
    length: 0,
    sum: null,
    max: null,
    min: null
  };

  return collection.reduce((acc, row) => {
    const rowKey = get(row, key);
    const rowValue = mapFn(row);

    const name = (key === 'iso') ? row.country : row.province;

    if (!name) {
      return acc;
    }

    if (row.score) {
      stats.length++;
      stats.sum += row.score;

      if (!stats.min) {
        stats.min = (row.score === -9999 ? 0 : row.score);
      } else {
        if (row.score < stats.min) {
          stats.min = row.score;
        }
      }

      if (!stats.max) {
        stats.max = row.score;
      } else {
        if (row.score > stats.max) {
          stats.max = row.score;
        }
      }
    }

    if (acc[rowKey]) {
      acc[rowKey].push(rowValue);
    } else {
      acc[rowKey] = [rowValue];
    }

    return acc;
  }, { _stats: stats });
}

export default aggregateByKey;