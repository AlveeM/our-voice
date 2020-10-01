import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

import UserDivisionCard from './UserDivisionCard';

const useStyles = makeStyles({
  container: {
    width: '100%',
    margin: '0px',
    marginTop: '30px'
  },
});

const parseDivisions = (divisions) => {
  const result = [];
  for (let key in divisions) {
    let division = {};
    division.ocdId = key;
    division.name = divisions[key].name;
    result.push(division);
  }
  return result;
}

export default function DivisionsContainer({ divisions }) {
  const classes = useStyles();
  const divisionsParsed = parseDivisions(divisions)

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} justify="center" className={classes.container}>
          {divisionsParsed.map(division => {
            return <Grid key={division.name} item xs={12} sm={6}>
              <UserDivisionCard division={division}/>
            </Grid>
          })}
      </Grid>
    </Container>
  )
}

