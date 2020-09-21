import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  container: {
    width: '100%',
    margin: '0px',
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  }
});

const getElectionCard = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardContent>
          Hi
        </CardContent>
      </Card>
    </Grid>
  )
}

function UpcomingElectionsContainer() {
  const classes = useStyles();
  const test = true;

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} align="center" className={classes.container}>
        {test ? (
          <>
          {getElectionCard()}
          {getElectionCard()}
          {getElectionCard()}
          {getElectionCard()}
          {getElectionCard()}
          {getElectionCard()}
          {getElectionCard()}
          {getElectionCard()}
          {getElectionCard()}
          {getElectionCard()}
          {getElectionCard()}
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

export default UpcomingElectionsContainer;