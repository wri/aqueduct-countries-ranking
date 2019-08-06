import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Icons, Header } from 'aqueduct-components';
import { initGA } from './utils/analytics';
import store from 'config/store';
import Pages from 'components/layout';

import 'react-app-polyfill/stable';
// import 'aqueduct-components/dist/bundle';
import 'styles/index.scss';

initGA();

const App = () => (
  <Provider store={store}>
    <Icons />
    <div className="header--wrapper">
      <Header
        title="Country Rankings"
        appRoute="/aqueduct/"
      >
        <ul className="list">
          <li>
            <a className="c-header-button" href="https://www.wri.org/aqueduct#aqueduct-tools" target="_blank" rel="noopener noreferrer">Tools</a>
          </li>
          <li>
            <a className="c-header-button" href="https://wri.org/aqueduct/blog" target="_blank" rel="noopener noreferrer">Blog</a>
          </li>
          <li>
            <a className="c-header-button" href="https://wri.org/aqueduct/publications" target="_blank" rel="noopener noreferrer">Publications</a>
          </li>
          <li>
            <a className="c-header-button" href="https://wri.org/aqueduct/data" target="_blank" rel="noopener noreferrer">Data</a>
          </li>
          <li>
            <a className="c-header-button" href="https://wri.org/aqueduct/user-stories" target="_blank" rel="noopener noreferrer">User Stories</a>
          </li>
          <li>
            <a className="c-header-button" href="https://wri.org/aqueduct/about" target="_blank" rel="noopener noreferrer">About</a>
          </li>
          <li>
            <a className="c-header-button" href="https://wri.org/aqueduct/subscribe" target="_blank" rel="noopener noreferrer">Subscribe</a>
          </li>
        </ul>
      </Header>
    </div>
    <Pages />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));