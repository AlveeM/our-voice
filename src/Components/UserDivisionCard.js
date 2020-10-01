import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserElection, removeUserElection } from '../Actions/userActions'
import { followElection, unfollowElection } from '../API/ourVoice';

import electionDetails from '../DATA/civics-voterInfoQuery';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345,
  },
}));

export default function UserElectionCard({ division }) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" align="center">{division.name}</Typography>
        <Typography variant="subtitle1" align="center">{division.ocdId}</Typography>
      </CardContent>
    </Card>
  );
}
