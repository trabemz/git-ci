const initialState = {
  isConfigured: false,
  repository: '',
  buildCommand: '',
  branch: '',
  synchronizeInterval: 10,
};

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SETTINGS:
      return {
        isConfigured: true,
        ...action.payload,
      };

    default:
      return state;
  }
}

const SET_SETTINGS = 'SET_SETTINGS';

export const setSettings = (payload) => ({
  type: SET_SETTINGS,
  payload: payload,
});
