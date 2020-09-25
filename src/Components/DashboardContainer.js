import React, { useState, useEffect } from 'react';
import DashboardTabs from './DashboardTabs';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';


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

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} justify="center" className={classes.container}>
        <Grid item xs={8}>
          <Paper>
            <Typography align="center" variant="h2">User Card</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <DashboardTabs />
        </Grid>
      </Grid>
    </Container>
  )
}