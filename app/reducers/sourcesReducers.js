import {
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
  SET_FILTER
} from '../actions/sourcesActions';

const initialState = {
  isLoading: true,
  sources: [],
  error: null,
  filters: {
    category: '',
    country: '',
    language: ''
  }
};

export default function sourcesReducers(state = initialState, actions) {
  switch (actions.type) {
    case GET_LIST_SUCCESS:
      return {
        ...state,
        sources: actions.payload,
        isLoading: false
      };
    case GET_LIST_ERROR:
      return {
        ...state,
        error: actions.payload
      };
    case SET_FILTER:
      return {
        ...state,
        filters: actions.payload
      };
    default:
      return state;
  }
}
