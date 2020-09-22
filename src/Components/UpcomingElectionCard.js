import React, { useState, useEffect } from 'react';
import electionDetails from '../DATA/civics-voterInfoQuery';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  expand: {
    transform: 'rotate(0deg)',
    // marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  follow: {
    marginLeft: 'auto',
    marginRight: '20%',
  }
}));

const UpcomingElectionCard = (props) => {
  const { name, electionDay, ocdDivisionId } = props.election;
  const [electionAdminBody, setElectionAdminBody] = useState({electionInfoUrl: "", votingLocationFinderUrl: "", ballotInfoUrl: ""})

  const { electionInfoUrl, votingLocationFinderUrl, ballotInfoUrl } = electionAdminBody;

  useEffect(() => {
    setElectionAdminBody(electionDetails.state[0].electionAdministrationBody)
  }, [])

  useEffect(() => console.log(electionAdminBody), [electionAdminBody])

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <Button variant="outlined" color="primary" className={classes.follow}>
            Follow
          </Button>
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

export default UpcomingElectionCard;