import React, { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

import RepresentativeCard from './RepresentativeCard';
import representativesData from '../DATA/civics-representatives-address';

const useStyles = makeStyles({
  container: {
    width: '100%',
    margin: '0px',
    marginTop: '30px'
  },
});

export default function RepresentativesContainer() {
  const [loading, setLoading] = useState(true);
  const [representatives, setRepresentatives] = useState([]);
  const classes = useStyles();
  
  useEffect(() => {
    const data = representativesData;
    setRepresentatives(parseDataToRepresentatives(data));
    setLoading(false);
  }, [])

  useEffect(() => {
    console.log(representatives)
  }, [representatives])

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} justify="center" className={classes.container}>
        {!loading ? (
          <>
            {
              representatives.map(representative => {
                return (
                  <Grid key={representative.name} item xs={12} sm={6} md={4}>
                    <RepresentativeCard representative={representative} />
                  </Grid>    
                )
              })
            }
            {/* <Grid item xs={12} sm={6} md={4}>
              <RepresentativeCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <RepresentativeCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <RepresentativeCard />
            </Grid> */}
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
