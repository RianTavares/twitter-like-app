import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TweetsList from '../../components/TweetsList';
import * as PageActions from '../../store/actions/pages';
import { PAGE_NAMES } from '../../utils/constants';

const Likes = () => {
  const dispatch = useDispatch();
  const likedPost = useSelector((state) => state.tweets.likedTweets);

  useEffect(() => {
    dispatch(PageActions.setCurrentPage({ index: 1, name: PAGE_NAMES.LIKE }));
  }, []);

  if (likedPost.length > 0) {
    return (
      <TweetsList type={PAGE_NAMES.LIKE} />
    );
  }

  return <p className="no-liked-tweets">There are no liked tweets to display.</p>;
};

export default Likes;
