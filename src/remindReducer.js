export default (state={}, action) => {
  if (action.type == 'new_notice') {
      var newNotice = action.newNotice;
      var newState = {
        remind_list: [...state.remind_list, newNotice];
      };
      return newState;
  } else {
    return state;
  }
}
