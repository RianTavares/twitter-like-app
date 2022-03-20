import React from 'react';
import { useSelector } from 'react-redux';
import { PAGE_NAMES } from '../../../../utils/constants';
import { getSecsFromNow } from '../../../../utils/date';

const PublishedTime = (props) => {
  const { id, type } = props;
  const allTweets = useSelector((state) => state.tweets.allTweets);
  const likedTweets = useSelector((state) => state.tweets.likedTweets);
  const selectList = type === PAGE_NAMES.HOME ? allTweets : likedTweets;

  const data = selectList.find((item) => item.id === id);

  return <span className="tweet-published-time">{getSecsFromNow(data.timestamp)}</span>;
};

export default PublishedTime;
