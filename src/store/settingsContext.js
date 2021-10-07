import { createContext, React, useReducer } from "react";
import { PropTypes } from "prop-types";
import { settingsReducer } from "./settingsReducer";
import { settingsActionTypes as types } from "./settingsActionTypes";

const initialState = {
  isSetted: false,
  repository: "",
  buildCommand: "",
  branch: "",
  synchronizeInterval: 10,
};

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(settingsReducer, initialState);

  value.setSettings = (settings) => {
    dispatch({ type: types.setSettings, payload: settings });
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

SettingsContextProvider.propTypes = {
  children: PropTypes.node,
};
