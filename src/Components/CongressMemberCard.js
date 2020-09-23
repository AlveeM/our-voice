import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import { purple } from '@material-ui/core/colors';

import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Person from '@material-ui/icons/Person';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import YouTube from '@material-ui/icons/YouTube';
import Email from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: purple[500],
  },
}));

const CongressMemberCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const {
    id,
    title,
    short_title,
    first_name,
    middle_name,
    last_name,
    party,
    leadership_role,
    twitter_account,
    facebook_account,
    youtube_account,
    url,
    contact_form,
    total_votes,
    missed_votes,
    total_present,
    office,
    phone,
    state,
    missed_votes_pct,
    votes_with_party_pct,
    votes_against_party_pct
  } = props.member

  const name = `${first_name} ${middle_name ? middle_name + " " : " "}${last_name}`

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {party}
          </Avatar>
        }
        title={name}
        subheader={`${state}, ${title}`}
      />
      <CardContent>
        <Typography paragraph>
          Office: {office} <br/>
          Phone: {phone}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link href={url} target="_blank">
          <IconButton aria-label="personal website">
            <Person />
          </IconButton>
        </Link>
        <Link href={`https://www.twitter.com/${twitter_account}`}>
          <IconButton aria-label="twitter acount">
            <Twitter />
          </IconButton>
        </Link>
        <Link href={`https://www.facebook.com/${facebook_account}`}>
          <IconButton aria-label="facebook acount">
            <Facebook />
          </IconButton>
        </Link>
        <Link href={`https://www.youtube.com/${youtube_account}`}>
          <IconButton aria-label="youtube acount">
            <YouTube />
          </IconButton>
        </Link>
        <Link href={contact_form}>
          <IconButton aria-label="contact form">
            <Email />
          </IconButton>
        </Link>
        
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
          <Typography paragraph>
            Total Votes: {total_votes} <br/>
            Missed Votes: {missed_votes} <br/>
            Total Present: {total_present} <br/>
            Missed Votes Percentage: {missed_votes_pct}% <br/>
            Votes with Party: {votes_with_party_pct}% <br/>
            Votes Against Party: {votes_against_party_pct}% <br/>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CongressMemberCard;