import React from 'react';
import UpcomingElectionsContainer from './UpcomingElectionsContainer';
import RecentBillsContainer from './RecentBillsContainer';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const HomeContainer = () => {
  return (
    <Grid container direction="column">
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h3" align="center">Upcoming Elections</Typography>
        </Grid>
        <Grid item>
          <UpcomingElectionsContainer />
        </Grid>
      </Grid>
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h3" align="center">Recent Bills</Typography>
        </Grid>
        <Grid item>
          <RecentBillsContainer />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeContainer;