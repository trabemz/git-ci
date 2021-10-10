import settingsReducer from './settingsReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore } from 'redux';

const persistConfig = {
  key: 'settings',
  storage,
};

const persistedSettingsReducer = persistReducer(persistConfig, settingsReducer);

let store = createStore(persistedSettingsReducer);
let persistor = persistStore(store);

export { store, persistor };
