import settingsReducer from './settingsReducer';
import buildsReducer from './buildsReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

let combinedReducer = combineReducers({
  settings: settingsReducer,
  builds: buildsReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export { store, persistor };
