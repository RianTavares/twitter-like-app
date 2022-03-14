/* eslint-disable import/prefer-default-export */

export const setLikedTweets = (payload) => ({
  type: 'SET_LIKED_TWEETS',
  payload,
});

export const removeUnlikedTweets = (payload) => ({
  type: 'REMOVE_UNLIKED_TWEETS',
  payload,
});
