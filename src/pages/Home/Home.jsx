/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { interval, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import TweetsList from '../../components/TweetsList';
import * as PageActions from '../../store/actions/pages';
import * as TweetsActions from '../../store/actions/tweets';
import { PAGE_NAMES } from '../../utils/constants';

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

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PageActions.setCurrentPage({ index: 0, name: PAGE_NAMES.HOME }));

    const subscriber = tweets.subscribe((observer) => {
      observer.id = `${observer.account}-${observer.timestamp}`;
      observer.liked = false;

      dispatch(TweetsActions.setNewTweetsList(observer));
    });

    return () => subscriber.unsubscribe();
  }, []);

  return (
    <TweetsList type={PAGE_NAMES.HOME} />
  );
};

export default Home;
