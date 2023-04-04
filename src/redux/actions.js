import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_AUTHOR_NAME = 'SET_AUTHOR_NAME';
export const SET_NEWS_TITLE = 'SET_NEWS_TITLE';
export const SET_NEWS_DETAIL = 'SET_NEWS_DETAIL';

export const setToken = uToken => dispatch => {
  // console.log('uToken,,', uToken);
  dispatch({
    type: SET_TOKEN,
    payload: uToken,
  });
};

export const setAuthorName = authorName => dispatch => {
  // console.log(`Author data in action: ${authorName}`);

  dispatch({
    type: SET_AUTHOR_NAME,
    payload: authorName,
  });
};

export const setNewsTitle = newsTitle => dispatch => {
  dispatch({
    type: SET_NEWS_TITLE,
    payload: newsTitle,
  });
};

export const setNewsDetail = newsDetails => dispatch => {
  dispatch({
    type: SET_NEWS_DETAIL,
    payload: newsDetails,
  });
};

// export {setImageURL, setAuthorName, setNewsTitle, setNewsDetail};
