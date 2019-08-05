import config from '../etc/config';

export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_ERROR = 'GET_LIST_ERROR';
export const SET_FILTER = 'SET_FILTER';

export const getListOfNewsSource = filter => {
  return dispatch => {
    return fetch(
      `https://newsapi.org/v2/sources?category=${filter.category}&country=${
        filter.country
      }&language=${filter.language}&apiKey=${config.apiKey}`
    )
      .then(response => response.json())
      .then(responseJson => {
        dispatch(getListSuccess(responseJson.sources));
      })
      .catch(error => {
        dispatch(getListError(error));
      });
  };
};

const getListSuccess = data => ({
  type: GET_LIST_SUCCESS,
  payload: data
});

const getListError = error => ({
  type: GET_LIST_ERROR,
  payload: error
});

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter
  };
}
