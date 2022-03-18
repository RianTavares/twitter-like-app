import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import garbage from '../../assests/images/garbage.svg';
import * as ModalsActions from '../../store/actions/modals';
import { PAGE_NAMES } from '../../utils/constants';

const TopBar = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pages.currentPage);
  const likedTweets = useSelector((state) => state.tweets.likedTweets);
  const allTweets = useSelector((state) => state.tweets.allTweets);
  const likesCounter = currentPage.name === PAGE_NAMES.HOME
    ? allTweets.filter((tweet) => tweet.liked).length
    : likedTweets.length;

  const handleDeleteAllClick = () => {
    dispatch(ModalsActions.toggleDeleteModalStatus());
  };

  return (
    <section className="top-bar">
      <div className="top-bar__column">
        <p className="top-bar__like-counter">{`Liked Tweets: ${likesCounter}`}</p>
      </div>
      <div className="top-bar__column">
        <button type="button" className="clear-button" onClick={handleDeleteAllClick}>
          <img src={garbage} className="clear-button__icon" alt="Delete All" />
          Delete All
        </button>
      </div>
    </section>
  );
};

export default TopBar;
