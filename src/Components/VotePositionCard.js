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

export default function VotePositionCard(props) {
  const classes = useStyles();

  const { roll_call,
          bill,
          description,
          result,
          total,
          position,} = props.votePosition

  return (
    <Card className={classes.root}>
      <CardHeader
        title={`${bill.number}: ${description}`} 
      />
      <CardContent>
        <Typography variant="h6">{`Voted: ${position}`}</Typography>
        {bill.latest_action && <Typography variant="h6" component="p">Latest Action: {bill.latest_action}</Typography>}
        <br />
        {(bill.title && !(description === bill.title)) && <Typography variant="h6" component="p">Bill Title (Full): {bill.title}</Typography>}
      </CardContent>
    </Card>
  );
}
