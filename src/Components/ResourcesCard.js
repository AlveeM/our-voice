import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    minWidth: 220,
    minHeight: 380,
    padding: '20px'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    textTransform: 'lowercase'
  }
});

export default function ResourcesCard({ resource }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h2">
          <Link href={resource.link}>
            {resource.title}
          </Link>
        </Typography>
        <Typography className={classes.pos} color="textPrimary">
          {resource.author}
        </Typography>
        <Typography variant="body1" component="p">
          {resource.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={2}>
          {
            resource.tags.map(tag => {
              return <Grid key={tag} item><Button className={classes.button} variant="contained" color="primary">#{tag}</Button></Grid>
            })
          }
        </Grid>
      </CardActions>
    </Card>
  );
}
