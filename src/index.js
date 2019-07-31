import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Icons } from 'aqueduct-components';

import store from 'config/store';
import Pages from 'components/layout';

import 'react-app-polyfill/stable';
import 'aqueduct-components/dist/bundle';
import 'styles/index.scss';

const App = () => (
  <Provider store={store}>
    <Icons />
    <Pages />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));