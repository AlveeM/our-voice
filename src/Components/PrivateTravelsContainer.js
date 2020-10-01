import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import PrivateTravelsTable from './PrivateTravelsTable';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '20px',
    paddingBottom: '20px'
  },
}));

export default function PrivateTravelsContainer({ privateTravels }) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      {privateTravels.length !== 0 ? 
           <PrivateTravelsTable privateTravels={privateTravels} />
         : <Typography variant="h3" align="center">No Recent Travels</Typography> }
    </Container>
  )
}
