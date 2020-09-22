import types from '../Utilities/types';

const initialState = {
  id: undefined,
  username: "",
  line1: "",
  city: "",
  state: "",
  zip_code: "",
}

const userReducer = (state = initialState, action) => {  
  switch(action.type) {
    case types.SET_USER:
      return action.payload.user;
    case types.UPDATE_USER_INFO:
      return {
        ...state,
        ...action.payload.user
      }
    case types.SIGN_OUT_USER:
      return initialState;
    default:
      return state;
  } 
}

export default userReducer;