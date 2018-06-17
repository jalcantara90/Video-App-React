import { createStore } from 'redux';
import reducer from './reducers/videos';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// const store = createStore(reducer, {
//   suggestionList: [],
//   categoryList: []
// })

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['selectedMovie']
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { 
  store,
  persistor
};