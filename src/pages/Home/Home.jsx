import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import TweetsList from '../../components/TweetsList';
import * as PageActions from '../../store/actions/pages';
import { PAGE_NAMES } from '../../utils/constants';

const Home = () => {
  const dispatch = useDispatch();
  const allTweets = useSelector((state) => state.tweets.allTweets);

  useEffect(() => {
    dispatch(PageActions.setCurrentPage({ name: PAGE_NAMES.HOME }));
  }, []);

  if (allTweets.length <= 0) return <Loading />;

  return (
    <TweetsList type={PAGE_NAMES.HOME} />
  );
};

export default Home;
