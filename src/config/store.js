import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { handleModule } from 'vizzuality-redux-tools';

import * as app from 'modules/app';
import * as data from 'modules/data';
import * as pages from 'modules/pages';
import * as map from 'modules/map';
import * as layers from 'modules/layers';
import * as dashboard from 'modules/dashboard';
import router from './router';

const modules = [
  { namespace: 'app', components: app },
  { namespace: 'data', components: data },
  { namespace: 'page', components: pages },
  { namespace: 'map', components: map },
  { namespace: 'layers', components: layers },
  { namespace: 'dashboard', components: dashboard }
];

const {
  initialDispatch,
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer
} = router;

const reducers = combineReducers({
  router: routerReducer,
  ...modules.reduce(
    (acc, module) => ({ ...acc, [module.namespace]: handleModule(module.components) }),
    {}
  )
});

const middleware = applyMiddleware( routerMiddleware, thunkMiddleware );

const enhancers = composeWithDevTools(routerEnhancer, middleware);

const store = createStore(reducers, enhancers);

initialDispatch();

export default store;
