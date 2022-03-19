import React from 'react';
import { getSecsFromNow } from '../../utils/date';
import LikeButton from '../LikeButton';
import ProfilePic from '../ProfilePic';

const Tweet = (props) => {
  const { data } = props;

  return (
    <article className="tweet">
      <ProfilePic />
      <section className="tweet__content">
        <div className="tweet__header">
          <span className="tweet__account">{data.account}</span>
          <span className="tweet__time">{getSecsFromNow(data.timestamp)}</span>
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
