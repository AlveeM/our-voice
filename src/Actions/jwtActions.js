import types from '../Utilities/types';

const setJWT = (token) => {
  return {
    type: types.SET_JWT_TOKEN,
    payload: token
  }
}

const removeJWT = () => {
  return {
    type: types.REMOVE_JWT_TOKEN,
  }
}

export default { setJWT, removeJWT }