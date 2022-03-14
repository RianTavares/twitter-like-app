import React from 'react';
import { useSelector } from 'react-redux';
import garbage from '../../assests/images/garbage.svg';

const TopBar = () => {
  const likedTweets = useSelector((state) => state.tweets.likedTweets);

  return (
    <section className="top-bar">
      <div className="top-bar__column">
        <p className="top-bar__like-counter">{`Liked Tweets: ${likedTweets.length}`}</p>
      </div>
      <div className="top-bar__column">
        <button type="button" className="clear-button">
          <img src={garbage} className="clear-button__icon" alt="Delete All" />
          Delete All
        </button>
      </div>
    </section>
  );
};

export default TopBar;
