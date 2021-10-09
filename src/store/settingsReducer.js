import { settingsActionTypes as types } from './settingsActionTypes';
export function settingsReducer(state, { type, payload }) {
  switch (type) {
    case types.setSettings:
      return {
        ...state,
        isConfigured: true,
        ...payload,
      };
    default:
      return state;
  }
}
