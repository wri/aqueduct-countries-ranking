import { NOT_FOUND } from 'redux-first-router';

export const PAGES = [
  {
    name: 'HOME',
    path: '/:iso?/:indicator?',
    page: 'home'
  },
  {
    name: NOT_FOUND,
    path: '/404',
    page: 'not-found'
  }
];

export default PAGES;
