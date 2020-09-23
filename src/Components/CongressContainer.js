import React, { useState, useEffect } from 'react';

import CongressMemberCard from './CongressMemberCard';
import senateMembersData from '../DATA/congress-members-senate';

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

function CongressContainer() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [congressMembers, setCongressMembers] = useState([])

  useEffect(() => {
    console.log("Reloaded!!!")
    setCongressMembers(senateMembersData.results[0].members)
    console.log(senateMembersData.results[0].members)
    setLoading(false);
  }, [])

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} justify="center" className={classes.container}>
        {!loading ? (
          <>
            {congressMembers.map(member => {
              return (
                <Grid key={member.id} item xs={12} sm={6} md={4}>
                  <CongressMemberCard  member={member} />
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

export default CongressContainer;