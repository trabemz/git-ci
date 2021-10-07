import { settingsActionTypes as types } from "./settingsActionTypes";
export function settingsReducer(state, { type, payload }) {
  switch (type) {
    case types.setSettings:
      return {
        ...state,
        isSetted: true,
        repository: payload.repository,
        buildCommand: payload.buildCommand,
        branch: payload.branch,
        synchronizeInterval: payload.synchronizeInterval,
      };
    default:
      return state;
  }
}
