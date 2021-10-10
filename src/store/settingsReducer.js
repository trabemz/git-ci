import { getLocalStorage, setLocalStorage } from './utils/localStorage';

const initialState = getLocalStorage('settings', {
  isConfigured: false,
  repository: '',
  buildCommand: '',
  branch: '',
  synchronizeInterval: 10,
});

const ACTION = {
  SET_SETTINGS: 'SET_SETTINGS',
};

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.SET_SETTINGS: {
      const newState = {
        isConfigured: true,
        ...action.payload,
      };
      setLocalStorage('settings', newState);
      return newState;
    }
    default:
      return state;
  }
}

export const setSettings = (payload) => ({
  type: ACTION.SET_SETTINGS,
  payload: payload,
});
