import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import VotePositionCard from './VotePositionCard';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    margin: '0px',
    padding: "20px 50px"
  },
}));

export default function BillCosponsorshipsContainer({ votePositions }) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container justify="center" spacing={2}>
      {votePositions.length !== 0 && votePositions.map((votePosition, idx) => {
              return (
                <Grid item xs={12} key={idx}>
                  <VotePositionCard votePosition={votePosition} />
                </Grid>
              )  
            })}
      </Grid>
    </Container>
  )
}
