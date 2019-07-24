import { INDICATOR_CATEGORIES } from 'services/wri-service/constants';

/**
 * Get average of given values, skips 'Tot' total value.
 * @param {*} data 
 */
function getAverage(data) {
  return data.filter(entry => entry.category !== 'Tot')
    .reduce((acc, indicator, index, {length}) => (index === length -1)
      ? (acc + indicator.score)/ length
      : acc + indicator.score, 0);
}

function setScore(score) {
  if (!score) {
    return 'NO DATA';
  }

  return score.toFixed(2);
}

function getIndicators(data) {
  return data.reduce((acc, indicator) => ({
    ...acc,
    [indicator.category]: {
      name: INDICATOR_CATEGORIES[indicator.category],
      score: setScore(indicator.score),
      rank: indicator.rank
    },
    Avg: {
      name: INDICATOR_CATEGORIES['Avg'],
      score: getAverage(data).toFixed(2)
    }
  }), {});
}

/**
 * 
 * @param {string} iso - Identifier
 * @param {*} data - Object where indicators are keys.
 */
export function processLocation(iso, data, nameProp='country') {
  return {
    iso,
    name: data[0][nameProp],
    indicators: getIndicators(data)
  };
}

export default processLocation;