import {
  SET_AUTHOR_NAME,
  SET_TOKEN,
  SET_NEWS_DETAIL,
  SET_NEWS_TITLE,
} from './actions';

const initialState = {
  token: '',
  authorName: [],
  newsTitle: '',
  newsDetails: [],
};

function newsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHOR_NAME:
      return {...state, authorName: action.payload};
    case SET_TOKEN:
      // console.log(action);
      return {...state, token: action.payload};
    case SET_NEWS_DETAIL:
      return {...state, newsDetails: action.payload};
    case SET_NEWS_TITLE:
      return {...state, newsTitle: action.payload};
    default:
      return state;
  }
}

export default newsReducer;
