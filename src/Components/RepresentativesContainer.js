import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

import RepresentativeCard from './RepresentativeCard';

const useStyles = makeStyles({
  container: {
    width: '100%',
    margin: '0px',
    marginTop: '30px'
  },
});

export default function RepresentativesContainer({ representatives }) {
  const classes = useStyles();
  const representativesParsed = parseDataToRepresentatives(representatives)

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} justify="center" className={classes.container}>
        {representativesParsed.map(representative => {
          return (
            <Grid key={representative.name} item xs={12} sm={6} md={4}>
              <RepresentativeCard representative={representative} />
            </Grid>    
          )
         })}
      </Grid>
    </Container>
  )
}

function parseDataToRepresentatives(data) {
  const representatives = []
  for (let office of data.offices) {
    for (let officialIdx of office.officialIndices) {
      const representative = data.officials[officialIdx];
      representative["officeName"] = office.name;
      representative["divisionId"] = office.divisionId;

      representatives.push(representative)
    }
  }
  return representatives;
}
