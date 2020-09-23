import types from '../Utilities/types';

export const setJWT = (token) => {
return {
    type: types.SET_JWT_TOKEN,
    payload: token
  }
}

export const removeJWT = () => {
  return {
    type: types.REMOVE_JWT_TOKEN,
  }
}

export default { setJWT, removeJWT }