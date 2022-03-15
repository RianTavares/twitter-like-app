const INITIAL_STATE = {
  deleteAllModalStatus: false,
};

function tweets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_DELETE_MODAL_STATUS':
      return {
        ...state,
        deleteAllModalStatus: !state.deleteAllModalStatus,
      };

    default:
      return state;
  }
}

export default tweets;
