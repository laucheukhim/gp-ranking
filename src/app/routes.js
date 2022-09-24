import PlainLayout from './layout/components/PlainLayout';
import CenterLayout from './layout/components/CenterLayout';
import SearchPage from './search/components/SearchPage';

import NotFoundPage from './error/components/NotFoundPage';

export const searchPage = 'search-page';
export const notFoundPage = 'not-found-page';

export default [
  {
    path: '/',
    component: PlainLayout,
    children: [
      {
        path: '',
        name: searchPage,
        component: SearchPage,
        props: true,
      },
    ],
  },
  {
    path: '*',
    component: CenterLayout,
    children: [
      {
        path: '',
        name: notFoundPage,
        component: NotFoundPage,
      },
    ],
  },
];
