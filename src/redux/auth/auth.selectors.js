export const selectUserName = state => state.auth.user.name;
export const selectIsLoggetIn = state => state.auth.isLoggetIn;
export const selectIsLoadingCurrentUser = state => {
  return state.auth.isLoadingCurrentUser;
};
