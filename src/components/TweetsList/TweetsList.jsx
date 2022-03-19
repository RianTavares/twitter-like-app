import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { PAGE_NAMES } from '../../utils/constants';
import Tweet from '../Tweet';

const selectLikedTweets = createSelector(
  (state) => state.tweets,
  (tweets) => tweets.likedTweets,
);

const selectAllTweets = createSelector(
  (state) => state.tweets,
  (tweets) => tweets.allTweets,
);

const TweetsList = (props) => {
  const { type } = props;
  const selectList = type === PAGE_NAMES.HOME ? selectAllTweets : selectLikedTweets;
  const tweetsList = useSelector(selectList);

  return (
    <ul className="tweets-list">
      {tweetsList.map((tweet) => (
        <li key={tweet.id}>
          <Tweet data={tweet} />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(TweetsList);
