import { connectRoutes } from 'redux-first-router';

import { PAGES } from 'modules/pages/constants';

const routes = PAGES.reduce((acc, page) => ({
  ...acc,
  [page.name]: {
    path: page.path,
    ...{ thunk: page.thunk }
  }
}), {});

const options = {
  basename: process.env.REACT_APP_BASE_URL,
  location: 'router',
  notFoundPath: `${process.env.REACT_APP_BASE_URL}404`,
  initialDispatch: false
};

export default connectRoutes(routes, options);
