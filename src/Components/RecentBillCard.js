import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const RecentBillCard = (props) => {
  const { number,
          short_title, 
          sponsor_title, 
          sponsor_name, 
          sponsor_state, 
          sponsor_party, 
          congressdotgov_url, 
          introduced_date, 
          committees } = props.bill

  const header = `${number}: ${short_title}`
  const sponsor = `${sponsor_title} ${sponsor_name} (${sponsor_party}-${sponsor_state})`

  return (
    <Card>
      <CardHeader
        title={header} />
      <CardContent>
        <Typography variant="h6" component="p">Introduced On: {introduced_date}</Typography>
        <Typography variant="h6" component="p">Sponsor: {sponsor}</Typography>
        {committees ? <Typography variant="h6" component="p">Committees: {committees}</Typography> : null}
      </CardContent>
      <CardActions>
        <Button color="primary">
          <Link href={congressdotgov_url} target="_blank">Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default RecentBillCard;