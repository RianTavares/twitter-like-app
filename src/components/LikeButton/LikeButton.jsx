import React, { useState } from 'react';
import { batch, useDispatch } from 'react-redux';
import * as TweetsActions from '../../store/actions/tweets';

const LikeButton = (props) => {
  const { tweetData } = props;
  const dispatch = useDispatch();
  const [previouslyLiked, setPreviouslyLiked] = useState(tweetData.liked);

  const setLikedTweetsList = (isLiked) => {
    if (isLiked) {
      batch(() => {
        dispatch(TweetsActions.updateTweetLikeStatus({ id: tweetData.id, liked: true }));
        dispatch(TweetsActions.setLikedTweets({ ...tweetData, liked: true }));
      });
    } else if (!isLiked) {
      batch(() => {
        dispatch(TweetsActions.updateTweetLikeStatus({ id: tweetData.id, liked: false }));
        dispatch(TweetsActions.removeUnlikedTweets({ ...tweetData, liked: false }));
      });
    }
  };

  const handleClick = (e) => {
    if (previouslyLiked) {
      setLikedTweetsList(false);
      setPreviouslyLiked(false);
    } else {
      const button = e.target;
      const isLiked = button.classList.contains('liking-action');

      button.classList.toggle('liking-action');
      setLikedTweetsList(!isLiked);
    }
  };

  return (
    <button type="button" onClick={handleClick} className="like-canvas">
      <div className={`like-canvas__heart${previouslyLiked ? ' previously-liked' : ''}`} />
    </button>
  );
};

export default React.memo(LikeButton);
