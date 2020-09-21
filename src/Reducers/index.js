import { combineReducers } from 'redux';
import userReducer from './userReducer';
import jwtReducer from './jwtReducer';
import upcomingElectionsReducer from './upcomingElectionsReducer';

let state = {
  user: userReducer,
  jwtToken: jwtReducer,
  upcomingElections: upcomingElectionsReducer
}

const rootReducer = combineReducers(state);

export default rootReducer;