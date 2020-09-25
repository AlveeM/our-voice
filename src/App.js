import React from 'react';
import './App.css';

import { Route, Switch, Link } from 'react-router-dom';

import NavBar from './Components/NavBar';
import HomeContainer from './Components/HomeContainer';
import CongressContainer from './Components/CongressContainer';
import DashboardContainer from './Components/DashboardContainer';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'light',
    },
  });

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
        <Route exact path="/dashboard">
          <DashboardContainer />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </ThemeProvider>
    </>
  );
}

export default App;
