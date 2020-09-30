import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import UserElectionCard from './UserElectionCard';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: '100%',
    margin: '0px',
    marginTop: '30px'
  },
});

export default function UserElectionsContainer() {
  const classes = useStyles();
  const elections = useSelector(state => state.user.elections.data)

  useEffect(() => {
    console.log(elections)
  }, [elections])

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} justify="center" className={classes.container}>
        {elections.length !== 0 && (
          <>
            {elections.map(election => {
              return (
                <Grid key={election.id} item xs={12} sm={6}>
                  <UserElectionCard election={election} />
                </Grid>
              ) 
            })}
          </>
        )}
      </Grid>
    </Container>
  )
}
