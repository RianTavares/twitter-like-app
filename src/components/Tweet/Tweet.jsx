/* eslint-disable no-unused-vars */
import React from 'react';

import ProfilePic from '../ProfilePic';
import LikeButton from '../LikeButton';

import { getSecsFromNow } from '../../utils/date';

const Tweet = (props) => {
  const { source } = props;

  return (
    <>
      {/* {source.map((tweet) => (
        <article className="tweet" key={`${tweet.account}-${tweet.timestamp}`}>
          <ProfilePic />
          <section className="tweet__content">
            <div className="tweet__header">
              <span className="tweet__account">{tweet.account}</span>
              <span className="tweet__time">{getSecsFromNow(tweet.timestamp)}</span>
            </div>
            <p className="tweet__text">{tweet.content}</p>
          </section>
        </article>
      ))} */}
      <article className="tweet">
        <ProfilePic />
        <section className="tweet__content">
          <div className="tweet__header">
            <span className="tweet__account">CommitStrip</span>
            <span className="tweet__time">a second ago</span>
          </div>
          <p className="tweet__text">Funny Tweet number 3</p>
          <div className="tweet__actions">
            <LikeButton />
          </div>
        </section>
      </article>
      <article className="tweet">
        <ProfilePic />
        <section className="tweet__content">
          <div className="tweet__header">
            <span className="tweet__account">CommitStrip</span>
            <span className="tweet__time">a second ago</span>
          </div>
          <p className="tweet__text">Funny Tweet number 3</p>
          <div className="tweet__actions">
            <LikeButton />
          </div>
        </section>
      </article>
      <article className="tweet">
        <ProfilePic />
        <section className="tweet__content">
          <div className="tweet__header">
            <span className="tweet__account">CommitStrip</span>
            <span className="tweet__time">a second ago</span>
          </div>
          <p className="tweet__text">Funny Tweet number 3</p>
          <div className="tweet__actions">
            <LikeButton />
          </div>
        </section>
      </article>
      <article className="tweet">
        <ProfilePic />
        <section className="tweet__content">
          <div className="tweet__header">
            <span className="tweet__account">CommitStrip</span>
            <span className="tweet__time">a second ago</span>
          </div>
          <p className="tweet__text">Funny Tweet number 3</p>
          <div className="tweet__actions">
            <LikeButton />
          </div>
        </section>
      </article>
      <article className="tweet">
        <ProfilePic />
        <section className="tweet__content">
          <div className="tweet__header">
            <span className="tweet__account">CommitStrip</span>
            <span className="tweet__time">a second ago</span>
          </div>
          <p className="tweet__text">Funny Tweet number 3</p>
          <div className="tweet__actions">
            <LikeButton />
          </div>
        </section>
      </article>
      <article className="tweet">
        <ProfilePic />
        <section className="tweet__content">
          <div className="tweet__header">
            <span className="tweet__account">CommitStrip</span>
            <span className="tweet__time">a second ago</span>
          </div>
          <p className="tweet__text">Funny Tweet number 3</p>
          <div className="tweet__actions">
            <LikeButton />
          </div>
        </section>
      </article>
      <article className="tweet">
        <ProfilePic />
        <section className="tweet__content">
          <div className="tweet__header">
            <span className="tweet__account">CommitStrip</span>
            <span className="tweet__time">a second ago</span>
          </div>
          <p className="tweet__text">Funny Tweet number 3</p>
          <div className="tweet__actions">
            <LikeButton />
          </div>
        </section>
      </article>
      <article className="tweet">
        <ProfilePic />
        <section className="tweet__content">
          <div className="tweet__header">
            <span className="tweet__account">CommitStrip</span>
            <span className="tweet__time">a second ago</span>
          </div>
          <p className="tweet__text">Funny Tweet number 3</p>
          <div className="tweet__actions">
            <LikeButton />
          </div>
        </section>
      </article>
      <article className="tweet">
        <ProfilePic />
        <section className="tweet__content">
          <div className="tweet__header">
            <span className="tweet__account">CommitStrip</span>
            <span className="tweet__time">a second ago</span>
          </div>
          <p className="tweet__text">Funny Tweet number 3</p>
          <div className="tweet__actions">
            <LikeButton />
          </div>
        </section>
      </article>
      <article className="tweet">
        <ProfilePic />
        <section className="tweet__content">
          <div className="tweet__header">
            <span className="tweet__account">CommitStrip</span>
            <span className="tweet__time">a second ago</span>
          </div>
          <p className="tweet__text">Funny Tweet number 3</p>
          <div className="tweet__actions">
            <LikeButton />
          </div>
        </section>
      </article>
      <article className="tweet">
        <ProfilePic />
        <section className="tweet__content">
          <div className="tweet__header">
            <span className="tweet__account">CommitStrip</span>
            <span className="tweet__time">a second ago</span>
          </div>
          <p className="tweet__text">Funny Tweet number 3</p>
          <div className="tweet__actions">
            <LikeButton />
          </div>
        </section>
      </article>
    </>
  );
};

export default Tweet;
