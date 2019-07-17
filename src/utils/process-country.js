import { INDICATOR_CATEGORIES } from 'services/wri-service/constants';

function getAverage(data) {
  return data.filter(entry => entry.category !== 'Tot')
    .reduce((acc, indicator, index, {length}) => (index === length -1)
      ? (acc + indicator.score)/ length
      : acc + indicator.score, 0);
}

function getIndicators(data) {
  return data.reduce((acc, indicator) => ({
    ...acc,
    [indicator.category]: {
      name: INDICATOR_CATEGORIES[indicator.category],
      score: indicator.score && indicator.score.toFixed(2),
      rank: indicator.rank
    },
    Avg: {
      name: INDICATOR_CATEGORIES['Avg'],
      score: getAverage(data).toFixed(2)
    }
  }), {});
}

export const processCountry = (iso, data) => {
  return {
    iso,
    name: data[0].country,
    indicators: getIndicators(data)
  };
}

export default processCountry;