import { createContext, React, useEffect, useReducer } from 'react';
import { PropTypes } from 'prop-types';
import { settingsReducer } from './settingsReducer';
import { settingsActionTypes as types } from './settingsActionTypes';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

const initialState = {
  isConfigured: false,
  repository: '',
  buildCommand: '',
  branch: '',
  synchronizeInterval: 10,
};

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(
    settingsReducer,
    getLocalStorage('settings', initialState),
  );

  value.setSettings = (settings) => {
    dispatch({ type: types.setSettings, payload: settings });
  };

  useEffect(() => {
    setLocalStorage('settings', value);
  }, [value]);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

SettingsContextProvider.propTypes = {
  children: PropTypes.node,
};
