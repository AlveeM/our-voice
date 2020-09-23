import React, { useReducer, useEffect } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Link as RouterLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setJWT } from '../Actions/jwtActions';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const formInitialState = {
  "username": "",
  "password": "",
  "line1": "",
  "city": "",
  "state": "",
  "zip_code": ""
}

const formReducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value
  }
}

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, formInitialState);
  const { username, password, line1, city, state } = formState;
  const zipCode = formState["zip_code"];

  const handleOnChange = e => {
    formDispatch({ field: e.target.name, value: e.target.value })
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

    fetch(`http://localhost:4000/users`, postConfig)
      .then(res => res.json())
      .then(user => handleResponse(user))
  }

  const handleResponse = res => {
    localStorage.token = res.token
    dispatch(setJWT(res.token));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleOnSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                value={username}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="line1"
                label="Street Address"
                name="line1"
                autoFocus
                value={line1}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="city"
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                value={city}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="state"
                label="State"
                name="state"
                value={state}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="zipCode"
                label="Zip"
                name="zip_code"
                value={zipCode}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Typography variant="body2">
                <RouterLink to="/sign-in">Already have an account? Sign in</RouterLink>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}