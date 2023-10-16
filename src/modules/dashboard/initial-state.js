import { SCOPE, TABS } from './constants';

export default {
  scope: SCOPE.GENERAL,
  tab: TABS.BASELINE,
  locationId: null,
  width: null,
  countries: {
    list: [],
    value: null
  },
  indicators: {
    list: [],
    value: null
  },
  widget: {
    data: []
  },
  widgetFuture: {
    data: []
  },
  periods: [
    { label: '2030', value: 2030, selected: true },
    { label: '2050', value: 2050, selected: false },
    { label: '2080', value: 2080, selected: false }
  ],
  period: { label: '2030', value: 2030, selected: true },
  scenarios: [
    {label: "Pessimistic", value: 'pes', checked: false},
    {label: "Business as usual", value: 'bau', checked: true},
    {label: "Optimistic", value: 'opt', checked: false}
  ],
  scenario: {label: "Business as usual", value: 'bau', checked: true},
};
