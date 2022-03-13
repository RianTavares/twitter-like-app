import React from 'react';

const TopBar = () => (
  <section className="top-bar">
    <div className="top-bar__column">
      <p className="top-bar__like-counter">Liked Tweets:</p>
    </div>
    <div className="top-bar__column">
      <p className="top-bar__delete-all">Clean All</p>
    </div>
  </section>
);

export default TopBar;
