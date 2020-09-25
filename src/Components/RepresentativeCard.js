import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Globe from '@material-ui/icons/Language';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import YouTube from '@material-ui/icons/YouTube';

import defaultAvatar from '../Static/images/default-avatar.jpeg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: '180px',
    backgroundSize: 'contain'
  },
});

export default function RepresentativeCard({ representative }) {
  const classes = useStyles();

  let {name, officeName, party, photoUrl, address, channels, divisionId, phones, urls, emails} = representative;

  address = address ? parseAddress(address) : "address not found";
  phones = phones ? parsePhones(phones) : "phone number not found";
  emails = emails ? parseEmails(emails) : "";

  return (
    <Card className={classes.root}>
      <CardHeader 
        align="center" 
        title={`${name} ${party ? `(${party[0]})` : ""}`} 
        subheader={officeName} />
      <CardMedia
        className={classes.media}
        image={photoUrl ? photoUrl : defaultAvatar}
        title="Contemplative Reptile"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Office: {address} <br/><br/>
          {phones && (<>Phone: {phones} <br/><br/></>)}
          {emails && (<>Email: {emails} <br/><br/></>)}
          OCD ID: {divisionId}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {urls && <Link href={urls[0]} target="_blank">
          <IconButton aria-label="personal website">
            <Globe />
          </IconButton>
        </Link>}
        {channels && parseChannels(channels)}
      </CardActions>
    </Card>
  );
}

function parseAddress(address) {
  const addressObj = address[0];
  const addressArr = [];

  for (let key of Object.keys(addressObj)) {
    if (addressObj[key]) {
      addressArr.push(addressObj[key]);
    }
  }

  return addressArr.join(', ');
}

function parsePhones(phones) {
  return phones.join(', ');
}

function parseEmails(emails) {
  return emails.join(', ');
}

function parseChannels(channels) {
  const channelsArr = [];

  for (let channel of channels) {
    const link = <Link key={`${channel.type}-${channel.id}`} href={`https://www.${channel.type}.com/${channel.id}`}>
                  <IconButton aria-label={`${channel.type}.toLowerCase() account`}>
                    {createLinkButton(channel)}
                  </IconButton>
                </Link>

    channelsArr.push(link)
  }

  return channelsArr;
}

function createLinkButton(channel) {
  const components = {
    facebook: Facebook,
    twitter: Twitter,
    youtube: YouTube
  }
  const Component = components[channel.type.toLowerCase()];
  return <Component />
}