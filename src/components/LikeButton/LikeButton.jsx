import React from 'react';

const LikeButton = () => {
  const handleLike = (e) => {
    const button = e.target;
    button.classList.toggle('liking-action');
  };

  return (
    <button type="button" onClick={handleLike} className="like-canvas">
      <div className="like-canvas__heart" />
    </button>
  );
};

export default LikeButton;
