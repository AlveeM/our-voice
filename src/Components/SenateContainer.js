import React, { useState, useEffect } from 'react';

import CongressMemberCard from './CongressMemberCard';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: '100%',
    margin: '0px',
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

export default function CongressContainer({ senateMembers }) {
  const classes = useStyles();

  return (
    <Grid container spacing={4} justify="center" className={classes.container}>
      {senateMembers.map(member => {
        return (
          <Grid key={member.id} item xs={12} sm={6} md={4}>
            <CongressMemberCard  member={member} />
          </Grid>
        ) 
      })}
    </Grid>
  )
}