import React from 'react'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import ResourcesCard from './ResourcesCard';

export default function ResourcesCardContainer({ resources }) {
  return (
    <>
      {
        resources.map(resource => {
          return <Grid key={resource.author} item xs={12} sm={6} lg={4}>
            <ResourcesCard resource={resource} />
          </Grid>
        })
      }
    </>
  )
}
