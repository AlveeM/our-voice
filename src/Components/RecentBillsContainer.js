import React, { useState, useEffect } from 'react';

import RecentBillCard from './RecentBillCard';
import recentBillsData from '../DATA/congress-recent-bills';
import { getRecentBills } from '../API/congressPropublica';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  container: {
    width: '100%',
    margin: '0px',
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

export default function RecentBillsContainer() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [recentBills, setRecentBills] = useState([])

  useEffect(() => {
    getRecentBills()
      .then(res => setRecentBills(res))
    setLoading(false)
  }, [setRecentBills, setLoading])

  return (
    <Container maxWidth="lg">
      <Grid container justify="center" spacing={2} className={classes.container}>
        {!loading ? (
          <>
            {recentBills.map(bill => {
              return (
                <Grid item xs={12} key={bill.bill_id}>
                  <RecentBillCard bill={bill}/>
                </Grid>
              )  
            })}
            {/* <Grid item xs={12}>
              <RecentBillCard />
            </Grid>
            <Grid item xs={12}>
              <RecentBillCard />
            </Grid>
            <Grid item xs={12}>
              <RecentBillCard />
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
