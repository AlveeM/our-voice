import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import BillCosponsorshipsCard from './BillCosponsorshipCard';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    margin: '0px',
    padding: "20px 50px"
  },
}));

export default function BillCosponsorshipsContainer({ bills }) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container justify="center" spacing={2}>
      {bills.length !== 0 && bills.map(bill => {
              return (
                <Grid item xs={12} key={bill.bill_id}>
                  <BillCosponsorshipsCard bill={bill}/>
                </Grid>
              )  
            })}
      </Grid>
    </Container>
  )
}
