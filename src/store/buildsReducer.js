import {
  FETCH_BUILDS_BEGIN,
  FETCH_BUILDS_SUCCESS,
  FETCH_BUILDS_FAILURE,
  ADD_BUILDS,
} from './buildsActions';

const initialState = {
  builds: [],
  loading: false,
  error: null,
};

export default function buildsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BUILDS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_BUILDS_SUCCESS:
      return {
        ...state,
        loading: false,
        builds: action.payload.builds,
      };

    case FETCH_BUILDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case ADD_BUILDS:
      return {
        ...state,
        builds: [...state.builds, ...action.payload.newBuilds],
      };

    default:
      return state;
  }
}
