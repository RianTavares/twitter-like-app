const INITIAL_STATE = {
  likedTweets: [],
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

    default:
      return state;
  }
}

export default tweets;
