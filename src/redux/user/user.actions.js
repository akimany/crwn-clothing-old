const setCurrentUser = (userObj) => {
  //user auth/...or null
  return {
    type: 'SET_CURRENT_USER',
    payload: userObj,
  };
};

export default setCurrentUser;
