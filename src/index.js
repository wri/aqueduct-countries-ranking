import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Icons, Header } from 'aqueduct-components';

import store from 'config/store';
import Pages from 'components/layout';

import 'react-app-polyfill/stable';
import 'aqueduct-components/dist/bundle';
import 'styles/index.scss';

const App = () => (
  <Provider store={store}>
    <Icons />
    <div className="header--wrapper">
      <Header
        title="Country Rankings"
        app="country-basin-risk-profiles-and-rankings"
        current-app="country-basin-risk-profiles-and-rankings"
      >
        <div></div>
      </Header>
    </div>
    <Pages />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));