import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TweetsList from '../../components/TweetsList';
import * as PageActions from '../../store/actions/pages';
import { PAGE_NAMES } from '../../utils/constants';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PageActions.setCurrentPage({ index: 0, name: PAGE_NAMES.HOME }));
  }, []);

  return (
    <TweetsList type={PAGE_NAMES.HOME} />
  );
};

export default Home;
