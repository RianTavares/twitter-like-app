const INITIAL_STATE = {
  currentPage: {},
};

function tweets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
}

export default tweets;
