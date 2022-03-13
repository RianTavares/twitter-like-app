import React, { useEffect, useState } from 'react';
import { interval, merge } from 'rxjs';
import { map } from 'rxjs/operators';

import Tweet from '../../components/Tweet';
import Loading from '../../components/Loading';

const createTweetSource = (frequency, account, attribute) => (
  interval(frequency).pipe(map((i) => ({
    account,
    timestamp: Date.now(),
    content: `${attribute} Tweet number ${i + 1}`,
  })))
);

const tweets = merge(
  createTweetSource(5000, 'AwardsDarwin', 'Facepalm'),
  createTweetSource(3000, 'iamdevloper', 'Expert'),
  createTweetSource(5000, 'CommitStrip', 'Funny'),
);

function Home() {
  const [tweetsList, setTweetsList] = useState([]);
  const tweetTimeLimit = 30000;

  const removeOldTweets = (list) => {
    const now = Date.now();
    const oldTweetIndex = list.findIndex(
      (tweet) => (now - tweet.timestamp) > tweetTimeLimit,
    );

    if (oldTweetIndex !== -1) { return list.slice(0, oldTweetIndex); }
    return list;
  };

  useEffect(() => {
    tweets.subscribe((observer) => setTweetsList((prevState) => {
      const newList = [...prevState];
      newList.unshift(observer);
      return removeOldTweets(newList);
    }));
    return () => tweets.unsubscribe();
  }, []);

  if (tweetsList.length <= 0) return <Loading />;

  return (
    <Tweet source={tweetsList} />
  );
}

export default Home;
