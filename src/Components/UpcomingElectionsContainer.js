import React, { useState, useEffect } from 'react';

import UpcomingElectionCard from './UpcomingElectionCard';
import electionsData from '../DATA/civics-elections';
import { getElections } from '../API/ourVoice';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  container: {
    width: '100%',
    margin: '0px',
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

export default function UpcomingElectionsContainer() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [elections, setElections] = useState([])

  useEffect(() => {
    getElections().then(res => setElections(res))
    setLoading(false);
  }, [])

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} justify="center" className={classes.container}>
        {!loading ? (
          <>
            {elections.map(election => {
              return (
                <Grid key={election.id} item xs={12} sm={6} md={4}>
                  <UpcomingElectionCard election={election} />
                </Grid>
              ) 
            })}
          </>
        ) : (
          <Grid item xs={12}>
            <CircularProgress/>
          </Grid>
        )}
      </Grid>
    </Container>
  )
}
