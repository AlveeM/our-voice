import types from '../Utilities/types';

const initialState = {
  id: undefined,
  username: "",
  line1: "",
  city: "",
  state: "",
  zip_code: "",
  elections: {
    data: [],
    ids: []
  }
}

// const initialState = {
//   id: 1,
//   username: "alvee",
//   line1: "8847 Francis Lewis Blvd",
//   city: "Queens",
//   state: "NY",
//   zip_code: "11427",
//   elections: {
//     data: [],
//     ids: []
//   }
// }

const userReducer = (state = initialState, action) => {  
  switch(action.type) {
    case types.SET_USER:
      return action.payload;
    case types.UPDATE_USER_INFO:
      return {
        ...state,
        ...action.payload
      }
    case types.SIGN_OUT_USER:
      return initialState;
    case types.ADD_USER_ELECTION:
      const electionId = String(action.payload.electionId)
      if (!state.elections.ids.includes(electionId)) {
        return {
          ...state,
          elections: {
            data: [...state.elections.data, action.payload],
            ids: [...state.elections.ids, electionId]
          }
        }
      } else {
        return state
      }
    case types.REMOVE_USER_ELECTION:
      const electionIdRemove = action.payload.electionId;
      return {
        ...state,
        elections: {
          data: state.elections.data.filter(election => election.electionId !== electionIdRemove),
          ids: state.elections.ids.filter(id => id !== String(electionIdRemove))
        }
      }
    case types.SET_USER_INITIAL_STATE:
      return initialState;
    default:
      return state;
  } 
}

export default userReducer;