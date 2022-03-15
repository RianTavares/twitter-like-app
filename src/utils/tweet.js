const TWEET_TIME_LIMIT = 30000; // 30 seconds in ms

export const removeOldTweets = (list) => {
  const now = Date.now();
  const tweetsList = list.filter(
    (tweet) => (now - tweet.timestamp) <= TWEET_TIME_LIMIT,
  );

  return tweetsList;
};
