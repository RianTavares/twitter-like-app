import React from 'react';
import LikeButton from '../LikeButton';
import ProfilePic from '../ProfilePic';
import PublishedTime from './components/PublishedTime';

const Tweet = (props) => {
  const { data, type } = props;

  return (
    <article className="tweet">
      <ProfilePic />
      <section className="tweet__content">
        <div className="tweet__header">
          <span className="tweet__account">{data.account}</span>
          <PublishedTime id={data.id} type={type} />
        </div>
        <p className="tweet__text">{data.content}</p>
        <div className="tweet__actions">
          <LikeButton tweetData={data} />
        </div>
      </section>
    </article>
  );
};

export default React.memo(Tweet);
