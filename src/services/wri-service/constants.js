export const INDICATORS = [
  {
    label: 'Baseline Water Stress',
    value: 'bws'
  },
  {
    label: 'Drought Risk',
    value: 'drr'
  },
  {
    label: 'Riverine Flood Risk',
    value: 'rfr'
  }
];

export const INDICATOR_CATEGORIES = {
  'Tot': 'Total gross withdrawal',
  'Dom': 'Domestic gross withdrawal',
  'Ind': 'Industrial gross withdrawal',
  'Irr': 'Irrigation gross withdrawal',
  'Liv': 'Livestock gross withdrawal',
  'Pop': 'Population',
};

export const ERRORS = {
  MISSING_REQUIRED_PARAMETER: 'Required parameter is not present.',
  MISSING_WIDGET_REQUEST_PARAMETERS: 'Cannot make widget data request. Missing parameters.'
};

export default {
  INDICATORS,
  INDICATOR_CATEGORIES,
  ERRORS
};