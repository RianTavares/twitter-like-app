/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as TweetsActions from '../../store/actions/tweets';

const LikeButton = (props) => {
  const { tweetData } = props;
  const dispatch = useDispatch();
  const likedTweets = useSelector((state) => state.tweets.likedTweets);

  const [previousLiked, setPreviousLiked] = useState(false);

  const handleLikedPosts = (isLiked) => {
    if (isLiked) {
      dispatch(TweetsActions.updateTweetLikeStatus({ id: tweetData.id, liked: true }));
      dispatch(TweetsActions.setLikedTweets({ ...tweetData, liked: true }));
    } else if (!isLiked) {
      dispatch(TweetsActions.updateTweetLikeStatus({ id: tweetData.id, liked: false }));
      dispatch(TweetsActions.removeUnlikedTweets({ ...tweetData, liked: false }));
    }
  };

  const checkTweetStatus = () => {
    setPreviousLiked(tweetData.liked);
  };

  const handleLike = (e) => {
    if (previousLiked) {
      handleLikedPosts(false);
      setPreviousLiked(false);
    } else {
      const button = e.target;
      const isLiked = button.classList.contains('liking-action');

      button.classList.toggle('liking-action');

      handleLikedPosts(!isLiked);
    }
  };

  useEffect(() => {
    checkTweetStatus();
  }, []);

  return (
    <button type="button" onClick={handleLike} className="like-canvas">
      <div className={`like-canvas__heart ${previousLiked && 'liked'}`} />
    </button>
  );
};

export default LikeButton;
