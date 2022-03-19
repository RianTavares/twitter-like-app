import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TweetsList from '../../components/TweetsList';
import * as PageActions from '../../store/actions/pages';
import { PAGE_NAMES } from '../../utils/constants';

const Likes = () => {
  const dispatch = useDispatch();
  const likedTweets = useSelector((state) => state.tweets.likedTweets);

  useEffect(() => {
    dispatch(PageActions.setCurrentPage({ name: PAGE_NAMES.LIKE }));
  }, []);

  if (likedTweets.length <= 0) return <p className="no-liked-tweets">There are no liked tweets to display.</p>;

  return <TweetsList type={PAGE_NAMES.LIKE} />;
};

export default React.memo(Likes);
