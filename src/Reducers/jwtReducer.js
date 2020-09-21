import actionsConst from '../Utilities/actionConstants';

let defaultState = {
  token: null,
}

const jwtReducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionsConst.SET_JWT_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case actionsConst.REMOVE_JWT_TOKEN:
      return defaultState;
    default:
      return state;
  }
}

export default jwtReducer;