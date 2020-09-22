import types from '../Utilities/types';

let defaultState = {
  token: null,
}

const jwtReducer = (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_JWT_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case types.REMOVE_JWT_TOKEN:
      return defaultState;
    default:
      return state;
  }
}

export default jwtReducer;