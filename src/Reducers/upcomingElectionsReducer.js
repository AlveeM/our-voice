import actionsConst from '../Utilities/actionConstants';

const defaultState = {
  elections: [],
}

const upcomingElectionsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionsConst.SET_UPCOMING_ELECTIONS:
      return action.payload.upcomingElections
    default:
      return state
  }
}

export default upcomingElectionsReducer