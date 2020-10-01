import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DashboardTabs from './DashboardTabs';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

import { getRepresentativesByAddress, getDivisions } from '../API/civicsGoogle';

const useStyles = makeStyles({
  container: {
    width: '100%',
    margin: '0px',
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

export default function DashboardContainer() {
  const classes = useStyles();
  const user = useSelector(state => state.user)
  const userElections = user.elections.data
  const [representatives, setRepresentatives] = useState([])
  const [divisions, setDivisions] = useState([])

  useEffect(() => {
    if (user.id && user.line1) {
      getRepresentativesByAddress(user)
        .then(res => {
          setRepresentatives(res)
          setDivisions(res.divisions)
        })
    }
  }, [setRepresentatives, user])

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} justify="center" className={classes.container}>
        <Grid item xs={8}>
          {/* <Paper>
            <Typography align="center" variant="h2">User Card</Typography>
          </Paper> */}
        </Grid>
        <Grid item xs={12}>
          <DashboardTabs representatives={representatives} userElections={userElections} divisions={divisions} />
        </Grid>
      </Grid>
    </Container>
  )
}