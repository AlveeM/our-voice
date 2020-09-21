import actionsConst from '../Utilities/actionConstants';

const setJWT = (token) => {
  return {
    type: actionsConst.SET_JWT_TOKEN,
    payload: token
  }
}

const removeJWT = () => {
  return {
    type: actionsConst.REMOVE_JWT_TOKEN,
  }
}

export default { setJWT, removeJWT }