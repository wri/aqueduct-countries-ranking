import { get } from 'lodash';

/**
 * aggregateByKey
 * @param {Array} collection - The collection of objects to be aggregated. 
 * @param {string} key - The key used to aggregate objects.
 * @param {function} mapFn - A map function for each of the objects in the collection.
 */
export function aggregateByKey(collection, key, mapFn = x => x) {
  return collection.reduce((acc, row) => {
    const rowKey = get(row, key);
    const rowValue = mapFn(row);

    if (acc[rowKey]) {
      acc[rowKey].push(rowValue);
    } else {
      acc[rowKey] = [rowValue];
    }

    return acc;
  }, {});
}

export default aggregateByKey;