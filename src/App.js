import React, { useState, useEffect } from 'react';
import './App.css';

import { Route, Switch, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setJWT } from './Actions/jwtActions';
import { setUser } from './Actions/userActions';

import NavBar from './Components/NavBar';
import HomeContainer from './Components/HomeContainer';
import CongressContainer from './Components/CongressContainer';
import CongressMemberDetailsContainer from './Components/CongressMemberDetailsContainer';
import ResourcesContainer from './Components/ResourcesContainer';
import DashboardContainer from './Components/DashboardContainer';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import SignOut from './Components/SignOut';
import UserProfileEdit from './Components/UserProfileEdit';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


function App() {
  const [signedIn, setSignedIn] = useState(false)
  const [menuState, setMenuState] = useState("")
  const dispatch = useDispatch();

  const theme = createMuiTheme({
    palette: {
      type: 'light',
    },
  });

  useEffect(() => {
    if(localStorage.token && localStorage.token !== "undefined") {
      fetch(`http://localhost:4000/users/stay_logged_in`, {
        headers: {
          "Authorization": localStorage.token
        }
      })
        .then(res => res.json())
        .then(res => {
          localStorage.token = res.token;
          localStorage.user = res.user;
          dispatch(setJWT(res.token));
          dispatch(setUser(res.user));
          setSignedIn(true)
          setMenuState("signed in")
        })
    } else {
      setSignedIn(false)
      setMenuState("signed out")
    }
  }, [dispatch])

  return (
    <>
    <ThemeProvider theme={theme}>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route exact path="/congress">
          <CongressContainer />
        </Route>
        <Route path="/congress/members/:id">
          <CongressMemberDetailsContainer />
        </Route>
        <Route exact path="/resources">
          <ResourcesContainer />
        </Route>
        <Route exact path="/dashboard">
          <DashboardContainer />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/sign-out">
          <SignOut />
        </Route>
        <Route exact path="/edit-profile">
          <UserProfileEdit />
        </Route>
      </Switch>
    </ThemeProvider>
    </>
  );
}

export default App;
