export const setLikedTweets = (payload) => ({
  type: 'SET_LIKED_TWEETS',
  payload,
});

export const removeUnlikedTweets = (payload) => ({
  type: 'REMOVE_UNLIKED_TWEETS',
  payload,
});

export const setNewTweetsList = (payload) => ({
  type: 'SET_NEW_TWEETS_LIST',
  payload,
});

export const updateTweetLikeStatus = (payload) => ({
  type: 'UPDATE_TWEET_LIKE_STATUS',
  payload,
});
