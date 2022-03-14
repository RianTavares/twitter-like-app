import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { interval, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import Loading from '../../components/Loading';
import Tweet from '../../components/Tweet';
import * as PageActions from '../../store/actions/pages';

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
  const dispatch = useDispatch();

  const removeOldTweets = (list) => {
    const now = Date.now();
    const oldTweetIndex = list.findIndex(
      (tweet) => (now - tweet.timestamp) > tweetTimeLimit,
    );

    if (oldTweetIndex !== -1) { return list.slice(0, oldTweetIndex); }
    return list;
  };

  useEffect(() => {
    dispatch(PageActions.setCurrentPage({ index: 0, name: 'home' }));
    const a = tweets.subscribe((observer) => setTweetsList((prevState) => {
      const newList = [...prevState];
      observer.id = `${observer.account}-${observer.timestamp}`;
      newList.unshift(observer);
      return removeOldTweets(newList);
    }));

    return () => a.unsubscribe();
  }, []);

  if (tweetsList.length <= 0) return <Loading />;

  return (
    <Tweet source={tweetsList} />
  );
}

export default Home;
