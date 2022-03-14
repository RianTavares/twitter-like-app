/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tweet from '../../components/Tweet';
import * as PageActions from '../../store/actions/pages';

const Likes = () => {
  const dispatch = useDispatch();
  const likedPost = useSelector((state) => state.tweets.likedTweets);

  useEffect(() => {
    dispatch(PageActions.setCurrentPage({ index: 1, name: 'likes' }));
  }, []);

  if (likedPost.length > 0) {
    return (
      <Tweet source={likedPost} />
    );
  }

  return <>nothing</>;
};

export default Likes;
