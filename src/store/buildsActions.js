import { fakeFetchBuilds } from './mock/fakeFetchBuilds';

export const FETCH_BUILDS_BEGIN = 'FETCH_BUILDS_BEGIN';
export const FETCH_BUILDS_SUCCESS = 'FETCH_BUILDS_SUCCESS';
export const FETCH_BUILDS_FAILURE = 'FETCH_BUILDS_FAILURE';
export const ADD_BUILDS = 'ADD_BUILDS';

export const fetchBuildsBegin = () => ({
  type: FETCH_BUILDS_BEGIN,
});

export const fetchBuildsSuccess = (builds) => ({
  type: FETCH_BUILDS_SUCCESS,
  payload: { builds },
});

export const fetchBuildsFailure = (error) => ({
  type: FETCH_BUILDS_FAILURE,
  payload: { error },
});

export const addBuilds = (newBuilds) => ({
  type: ADD_BUILDS,
  payload: { newBuilds },
});

export const fetchBuilds = () => {
  return (dispatch) => {
    dispatch(fetchBuildsBegin());
    return fakeFetchBuilds()
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then((res) => {
        dispatch(fetchBuildsSuccess(res.builds));
        return res;
      })
      .catch((error) => dispatch(fetchBuildsFailure(error)));
  };
};

export const loadMoreBuilds = () => {
  return (dispatch) => {
    fakeFetchBuilds().then((res) => {
      if (res.ok) {
        dispatch(addBuilds(res.builds));
      } else {
        loadMoreBuilds()(dispatch);
      }
    });
  };
};
