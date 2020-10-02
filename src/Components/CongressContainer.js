import React, { useState, useEffect } from 'react';

import SenateContainer from './SenateContainer';
import CongressSearch from './CongressSearch';
import senateMembersData from '../DATA/congress-members-senate';

import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '20px',
  },
}));

export default function CongressContainer() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [senateMembers, setSenateMembers] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    console.log("Reloaded!!!")
    setSenateMembers(senateMembersData.results[0].members)
    console.log(senateMembersData.results[0].members)
    setLoading(false);
  }, [])

  const filterMembers = (members) => {
    if (query) {
      return members.filter(member => member.first_name.toLowerCase().includes(query) || member.last_name.toLowerCase().includes(query) || member.state.toLowerCase().includes(query))
    } else {
      return members
    }
  }

  return (
    <Container maxWidth="lg">
      <Grid container justify="center">
        <Grid container item justify="center" xs={10} >
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <CongressSearch setQuery={setQuery} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      {!loading && <SenateContainer senateMembers={filterMembers(senateMembers)} />}
    </Container>
  )
}