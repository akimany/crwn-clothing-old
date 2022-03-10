import UserActionTypes from './user.types';

const setCurrentUser = (userObj) => {
  //user auth/...or null
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: userObj,
  };
};

export default setCurrentUser;
