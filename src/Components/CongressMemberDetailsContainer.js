import React, { useState, useEffect } from 'react'

import { useLocation, useParams } from 'react-router-dom';

import CongressMemberTabs from './CongressMemberTabs';
import CongressMemberProfileCard from './CongressMemberProfileCard';
import { getMember, 
         getMemberOfficeExpenses, 
         getMemberPrivateTravels, 
         getMemberBillCosponsorships,
         getMemberVotePositions } from '../API/congressPropublica';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import { responsiveFontSizes, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    width: '100%',
    margin: '0px',
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

export default function DashboardContainer() {
  const memberId = useParams().id;
  const classes = useStyles();

  const [member, setMember] = useState(null);
  const [privateTravels, setPrivateTravels] = useState([]);
  const [bills, setBills] = useState([]);
  const [votePositions, setVotePositions] = useState([]);
  
  const officeExpenses = expensesData;

  useEffect(() => {
    getMember(memberId)
      .then(res => setMember(res))

    getMemberPrivateTravels(memberId)
      .then(res => setPrivateTravels(res))

    getMemberBillCosponsorships(memberId)
      .then(res => setBills(res))

    getMemberVotePositions(memberId)
      .then(res => setVotePositions(res))
  }, [memberId, setPrivateTravels, setMember, setBills, setVotePositions])

  // useEffect(() => {
  //   getMemberOfficeExpenses("A000374", 2018, 1)
  //     .then(res => console.log(responsiveFontSizes))
  // }, [])

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} justify="center" className={classes.container}>
        <Grid container item xs={4}>
          <Grid item xs={12}>
            {member && <CongressMemberProfileCard member={member} />}
          </Grid>
          {/* <Paper>
            <Typography align="center" variant="h2">Profile</Typography>
          </Paper> */}
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <CongressMemberTabs 
              officeExpenses={officeExpenses} 
              privateTravels={privateTravels} 
              bills={bills}
              votePositions={votePositions} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

var expensesData = [{
        "category": "OFFICE TOTALS:",
        "category_slug": "total",
        "amount": 387071.84,
        "year_to_date": 1262014.82,
        "change_from_previous_quarter": 82402.95
    }, {
        "category": "PERSONNEL COMPENSATION",
        "category_slug": "personnel",
        "amount": 320299.8,
        "year_to_date": 1011503.36,
        "change_from_previous_quarter": 90148.75
    }, {
        "category": "TRAVEL",
        "category_slug": "travel",
        "amount": 31165.13,
        "year_to_date": 112501.01,
        "change_from_previous_quarter": -4998.56
    }, {
        "category": "RENT COMMUNICATION UTILITIES",
        "category_slug": "rent-utilities",
        "amount": 21496.05,
        "year_to_date": 80975.74,
        "change_from_previous_quarter": 86.77
    }, {
        "category": "OTHER SERVICES",
        "category_slug": "other-services",
        "amount": 7417.85,
        "year_to_date": 27810.78,
        "change_from_previous_quarter": 717.9
    }, {
        "category": "SUPPLIES AND MATERIALS",
        "category_slug": "supplies",
        "amount": 3678.94,
        "year_to_date": 15505.22,
        "change_from_previous_quarter": -1557.58
    }, {
        "category": "FRANKED MAIL",
        "category_slug": "franked-mail",
        "amount": 1536.35,
        "year_to_date": 7868.12,
        "change_from_previous_quarter": -1984.57
    }, {
        "category": "PRINTING AND REPRODUCTION",
        "category_slug": "printing",
        "amount": 1011.52,
        "year_to_date": 3985.79,
        "change_from_previous_quarter": -9.76
    }, {
        "category": "EQUIPMENT",
        "category_slug": "equipment",
        "amount": 466.2,
        "year_to_date": 1864.8,
        "change_from_previous_quarter": 0.0
    }]