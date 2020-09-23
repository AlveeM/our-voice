import React, { useState, useEffect } from 'react';

import RecentBillCard from './RecentBillCard';
import recentBillsData from '../DATA/congress-recent-bills';

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

function RecentBillsContainer() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [recentBills, setRecentBills] = useState({})

  useEffect(() => {
    setRecentBills(recentBillsData.results[0].bills)
    setLoading(false)
  }, [])

  // useEffect(() => {
  //   console.log(recentBills)
  // }, [recentBills])

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

export default RecentBillsContainer;