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
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  follow: {
    margin: 'auto',
    marginBottom: '15px'
  }
}));

export default function UserElectionCard(props) {
  const { id, electionId, name, electionDay, ocdDivisionId } = props.election;
  const [electionAdminBody, setElectionAdminBody] = useState({electionInfoUrl: "", votingLocationFinderUrl: "", ballotInfoUrl: ""})
  const { electionInfoUrl, votingLocationFinderUrl, ballotInfoUrl } = electionAdminBody;

  const userElectionIds = useSelector(state => state.user.elections.ids)
  const dispatch = useDispatch();

  useEffect(() => {
    setElectionAdminBody(electionDetails.state[0].electionAdministrationBody)
  }, [])

  // useEffect(() => console.log(electionAdminBody), [electionAdminBody])

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFollowClick = () => {
    dispatch(addUserElection(props.election))
    followElection(id)
  }

  const handleUnfollowClick = () => {
    dispatch(removeUserElection(props.election))
    unfollowElection(id)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        align="center"
        title={electionDay}
        subheader={ocdDivisionId}
      />
      <CardContent>
        <Typography variant="h6" component="p" align="center">
          {name}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          { !userElectionIds.includes(String(electionId)) 
            ? <Button onClick={handleFollowClick} variant="contained" color="primary" className={classes.follow}>
              Follow
            </Button>
            : <Button onClick={handleUnfollowClick} variant="contained" color="primary" className={classes.follow}>
              Unfollow
            </Button> }
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography align="center" paragraph><Link href={electionInfoUrl}>Election Info</Link></Typography>
          <Typography align="center" paragraph><Link href={votingLocationFinderUrl}>Voting Location Finder</Link></Typography>
          <Typography align="center" paragraph><Link href={ballotInfoUrl}>Ballot Info</Link></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
