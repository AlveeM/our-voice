import types from '../Utilities/types';

export const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: user
  }
}

export const updateUserInfo = (userInfo) => {
  return {
    type: types.UPDATE_USER_INFO,
    payload: userInfo
  }
}

export const signoutUser = () => {
  return {
    type: types.SIGN_OUT_USER,
  }
}

export const addUserElection = (election) => {
  return {
    type: types.ADD_USER_ELECTION,
    payload: election
  }
}

export const removeUserElection = (election) => {
  return {
    type: types.REMOVE_USER_ELECTION,
    payload: election
  }
}

export const setUserInitialState = () => {
  return {
    type: types.SET_USER_INITIAL_STATE
  }
}