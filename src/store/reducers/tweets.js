import { removeOldTweets } from '../../utils/tweet';

const INITIAL_STATE = {
  likedTweets: [],
  allTweets: [],
};

function tweets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LIKED_TWEETS':
      return {
        ...state,
        likedTweets: [action.payload, ...(state.likedTweets)],
      };

    case 'REMOVE_UNLIKED_TWEETS': {
      const newList = state.likedTweets.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        likedTweets: newList,
      };
    }

    case 'SET_NEW_TWEETS_LIST': {
      const newList = [...state.allTweets];
      newList.unshift(action.payload);

      return {
        ...state,
        allTweets: removeOldTweets(newList),
      };
    }

    case 'UPDATE_TWEET_LIKE_STATUS': {
      const newList = state.allTweets.map((tweet) => {
        if (tweet.id === action.payload.id) {
          return { ...tweet, liked: action.payload.liked };
        }
        return tweet;
      });

      return {
        ...state,
        allTweets: newList,
      };
    }

    default:
      return state;
  }
}

export default tweets;
