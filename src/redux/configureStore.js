import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { rootReducer } from './reducers';

export * from './state';

export const createReduxStore = (initialState) => {
  return createStore(rootReducer, initialState, devToolsEnhancer());
};
