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
  'Tot': 'Total',
  'Dom': 'Domestic',
  'Ind': 'Industrial',
  'Irr': 'Agricultural',
  'Liv': 'Livestock',
  'Pop': 'Population',
  'Avg': 'Average'
};

export const TIMELINE_ITEMS = [
  { label: '2030', value: 2030, selected: true },
  { label: '2050', value: 2050, selected: false },
  { label: '2080', value: 2080, selected: false }
];

export const SCENARIOS = [
  {label: "Pessimistic", value: 'pes', checked: false},
  {label: "Business as usual", value: 'bau', checked: true},
  {label: "Optimistic", value: 'opt', checked: false}
]

export const ERRORS = {
  MISSING_REQUIRED_PARAMETER: 'Required parameter is not present.',
  MISSING_WIDGET_REQUEST_PARAMETERS: 'Cannot make widget data request. Missing parameters.'
};

export default {
  INDICATORS,
  INDICATOR_CATEGORIES,
  ERRORS
};