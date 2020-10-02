import React, { useState, useReducer, useEffect } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Link as RouterLink, useHistory, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setJWT } from '../Actions/jwtActions';
import { setUser } from '../Actions/userActions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Our Voice{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const formInitialState = {
  username: "",
  password: "",
}

const formReducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value
  }
}

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [formState, formDispatch] = useReducer(formReducer, formInitialState);
  const { username, password } = formState;
  const [loginError, setLoginError] = useState(false);

  const handleOnChange = e => {
    formDispatch({field: e.target.name, value: e.target.value })
  }

  const handleOnSubmit = e => {
    e.preventDefault();

    const postConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: formState
      })
    }

    fetch(`http://localhost:4000/login`, postConfig)
      .then(res => res.json())
      .then(res => {
        if (!res.error) {
          handleResponse(res);
          history.push('/')
        } else {
          setLoginError(true);
          setTimeout(() => setLoginError(false), 2000);
        }
      })
  }

  const handleResponse = res => {
    localStorage.token = res.token;
    localStorage.user = res.user;
    dispatch(setJWT(res.token));
    dispatch(setUser(res.user));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
          <AccountCircleOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleOnSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={username}
            onChange={handleOnChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleOnChange}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          {loginError && <Typography variant="body2" align="center" color="error">Wrong username or password. Please try again.</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Typography variant="body2">
                <RouterLink to="/sign-up">{"Don't have an account? Sign Up"}</RouterLink>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}