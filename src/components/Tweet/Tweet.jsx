/* eslint-disable no-unused-vars */
import React from 'react';
import { getSecsFromNow } from '../../utils/date';
import LikeButton from '../LikeButton';
import ProfilePic from '../ProfilePic';

const Tweet = (props) => {
  const { source } = props;
  // const source = {
  //   content: 'Teste',
  //   account: 'Conta',
  //   timestamp: '1231231435453',
  //   id: 'Conta-1231231435453',
  // };

  // useEffect(() => {
  //   source.id = `${source.account}-${source.id}`;
  // }, []);

  return (
    <>
      {source.map((tweet) => (
        <article className="tweet" key={`${tweet.account}-${tweet.timestamp}`}>
          <ProfilePic />
          <section className="tweet__content">
            <div className="tweet__header">
              <span className="tweet__account">{tweet.account}</span>
              <span className="tweet__time">{getSecsFromNow(tweet.timestamp)}</span>
            </div>
            <p className="tweet__text">{tweet.content}</p>
            <div className="tweet__actions">
              <LikeButton source={tweet} />
            </div>
          </section>
        </article>
      ))}
      {/* <article className="tweet">
        <ProfilePic />
        <section className="tweet__content">
          <div className="tweet__header">
            <span className="tweet__account">CommitStrip</span>
            <span className="tweet__time">a second ago</span>
          </div>
          <p className="tweet__text">Funny Tweet number 3</p>
          <div className="tweet__actions">
            <LikeButton source={source} />
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
      </article> */}
    </>
  );
};

export default Tweet;
