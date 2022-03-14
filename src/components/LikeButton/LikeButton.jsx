import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as TweetsActions from '../../store/actions/tweets';

const LikeButton = (props) => {
  const { source } = props;
  const dispatch = useDispatch();
  const likedTweets = useSelector((state) => state.tweets.likedTweets);
  const [previousLiked, setPreviousLiked] = useState(false);

  const handleLikedPosts = (isLiked) => {
    if (isLiked) dispatch(TweetsActions.setLikedTweets(source));
    else if (!isLiked) dispatch(TweetsActions.removeUnlikedTweets(source));
  };

  const checkTweetStatus = () => {
    const status = likedTweets.findIndex((item) => item.id === source.id) || null;
    if (status >= 0) setPreviousLiked(true);
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
