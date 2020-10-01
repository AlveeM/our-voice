import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 15px'
  }
}));

export default function BillCosponsorshipCard(props) {
  const classes = useStyles();

  const { number,
          title, 
          sponsor_title, 
          sponsor_name, 
          sponsor_state, 
          sponsor_party, 
          congressdotgov_url, 
          introduced_date, 
          committees,
          cosponsored_date,
          primary_subject,
          summary_short,
          latest_major_action_date,
          latest_major_action } = props.bill

  const header = `${number}: ${title}`
  const sponsor = `${sponsor_title} ${sponsor_name} (${sponsor_party}-${sponsor_state})`

  return (
    <Card className={classes.root}>
      <CardHeader
        title={<Link href={congressdotgov_url} target="_blank">{header}</Link>} 
        subheader={primary_subject}
      />
      <CardContent>
        <Typography variant="h6" component="p">Introduced On: {introduced_date}</Typography>
        <Typography variant="h6" component="p">Sponsor: {sponsor}</Typography>
        { cosponsored_date && <Typography variant="h6" component="p">Cosponsored On: {cosponsored_date}</Typography>}
        <Typography variant="h6" component="p">Latest Major Action on {latest_major_action_date}: {latest_major_action}</Typography>
        { committees && <Typography variant="h6" component="p">Committees: {committees}</Typography>}
        { summary_short && <>
          <br />
          <Typography variant="h6" component="p">Summary:</Typography>
          <Typography variant="body1" component="p">{summary_short}</Typography>
          </> }
      </CardContent>
    </Card>
  );
}
