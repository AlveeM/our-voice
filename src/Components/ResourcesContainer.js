import React, { useState, useEffect} from 'react'

import ResourcesCardContainer from './ResourcesCardContainer';
import ResourcesControlContainer from './ResourcesControlContainer';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button'

import { getResources, getTags } from '../API/ourVoice';

const useStyles = makeStyles({
    container: {
      width: '100%',
      margin: '0px',
      paddingLeft: "50px",
      paddingRight: "50px",
    },
    controlBarPaper: {
      padding: '20px 15px',
      marginBottom: '20px'
    }
  });

export default function ResourcesContainer() {
  const classes = useStyles();

  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    getResources().then(res => setResources(res))
    getTags().then(res => {
      const tagsArr = res.map(tag => tag.name);
      setTags(tagsArr);
    })
  }, []) 

  useEffect(() => {
    if (selectedTag) {
      const filtered = resources.filter(resource => resource.tags.includes(selectedTag));
      setFilteredResources(filtered);
    } else {
      setFilteredResources(resources);
    }
  }, [resources, selectedTag])

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} className={classes.container}>
        <Grid container item justify="center" xs={12} spacing={3}>
          <Grid container item xs={10}>
            <Paper className={classes.controlBarPaper} elevation={3}>
              <ResourcesControlContainer tags={tags} setSelectedTag={setSelectedTag} />
            </Paper>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={4}>
          {resources.length !== 0 && <ResourcesCardContainer resources={filteredResources} />}
        </Grid>
      </Grid>
    </Container>
  )
}
