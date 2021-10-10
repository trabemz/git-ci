import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: getLocalStorage('settings', {
    isConfigured: false,
    repository: '',
    buildCommand: '',
    branch: '',
    synchronizeInterval: 10,
  }),
  reducers: {
    setSettings: (state, action) => {
      const newState = {
        isConfigured: true,
        ...action.payload,
      };
      setLocalStorage('settings', newState);
      return newState;
    },
  },
});

export const { setSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
