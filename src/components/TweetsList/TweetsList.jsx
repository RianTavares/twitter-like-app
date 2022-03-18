import React from 'react';
import { useSelector } from 'react-redux';
import { PAGE_NAMES } from '../../utils/constants';
import Loading from '../Loading';
import Tweet from '../Tweet';

const TweetsList = (props) => {
  const { type } = props;
  const allTweets = useSelector((state) => state.tweets.allTweets);
  const likedTweets = useSelector((state) => state.tweets.likedTweets);
  const list = type === PAGE_NAMES.HOME ? allTweets : likedTweets;

  if (list.length <= 0 && type === PAGE_NAMES.HOME) return <Loading />;

  return (
    <ul className="tweets-list">
      {list.map((tweet) => (
        <li key={tweet.id}>
          <Tweet data={tweet} />
        </li>
      ))}
    </ul>
  );
};

export default TweetsList;
