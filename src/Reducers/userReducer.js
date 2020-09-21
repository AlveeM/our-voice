import actionsConst from '../Utilities/actionConstants';

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
    case actionsConst.SET_USER:
      return action.payload.user;
    case actionsConst.UPDATE_USER_INFO:
      return {
        ...state,
        ...action.payload.user
      }
    case actionsConst.SIGN_OUT_USER:
      return initialState;
    default:
      return state;
  } 
}

export default userReducer;