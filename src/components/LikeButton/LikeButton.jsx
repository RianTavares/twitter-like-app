import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as TweetsActions from '../../store/actions/tweets';

const LikeButton = (props) => {
  const dispatch = useDispatch();
  const likedTweets = useSelector((state) => state.tweets.likedTweets);

  const { tweetData } = props;
  const [previousLiked, setPreviousLiked] = useState(false);

  const handleLikedPosts = (isLiked) => {
    if (isLiked) {
      dispatch(TweetsActions.setLikedTweets(tweetData));
      dispatch(TweetsActions.updateTweetLikeStatus({ id: tweetData.id, liked: true }));
    } else if (!isLiked) {
      dispatch(TweetsActions.removeUnlikedTweets(tweetData));
      dispatch(TweetsActions.updateTweetLikeStatus({ id: tweetData.id, liked: false }));
    }
  };

  const checkTweetStatus = () => {
    const status = likedTweets.findIndex((item) => item.id === tweetData.id) || null;
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
