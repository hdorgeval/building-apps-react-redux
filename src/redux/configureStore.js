import { createStore } from 'redux';
import { rootReducer } from './reducers';

export * from './state';

export const createReduxStore = (initialState) => {
  return createStore(rootReducer, initialState);
};
