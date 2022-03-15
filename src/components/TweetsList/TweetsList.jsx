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

  if (allTweets.length <= 0 && type === PAGE_NAMES.HOME) return <Loading />;

  return (
    <>
      {list.map((tweet) => (
        <Tweet data={tweet} key={tweet.id} />
      ))}
    </>
  );
};

export default TweetsList;
