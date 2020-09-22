import types from '../Utilities/types';

const defaultState = {
  elections: [],
}

const upcomingElectionsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_UPCOMING_ELECTIONS:
      return action.payload.upcomingElections
    default:
      return state
  }
}

export default upcomingElectionsReducer