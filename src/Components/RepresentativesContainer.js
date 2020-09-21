import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const RepresentativesContainer = () => {
  return (
    <Grid container justify="center" style={{border: "2px solid red"}}>
      <Grid item>
        <Typography variant="h2">RepresentativesContainer</Typography>
      </Grid>
    </Grid>
  )
}

export default RepresentativesContainer;