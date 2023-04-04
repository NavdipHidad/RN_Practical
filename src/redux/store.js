import {
  //legacy_createStore as createStore,
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';

import newsReducer from './reducer';

const rootReducer = combineReducers({newsReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
