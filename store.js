import { 
  createStore,
  applyMiddleware
} from 'redux';
import reducer from './reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['selectedMovie']
}
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation // es como se llama el reducer definido en reducers.
)

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(
  persistedReducer,
  applyMiddleware(navigationMiddleware)
)
const persistor = persistStore(store)

export { 
  store,
  persistor
};