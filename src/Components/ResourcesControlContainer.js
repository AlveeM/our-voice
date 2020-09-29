import React from 'react'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

import { getResources, getTags } from '../API/ourVoice';

const useStyles = makeStyles({
    button: {
      margin: '10px 15px',
      textTransform: 'lowercase'
    },
    buttonClear: {
      margin: '10px 15px'
    }
  });

export default function ResourcesControlContainer({ tags, setSelectedTag }) {
  const classes = useStyles();

  const handleOnClick = (e) => {
    const tagName = e.target.innerText.split('#')[1];
    setSelectedTag(tagName);
  }

  const handleOnClickClear = (e) => {
    setSelectedTag("");
  }

  return (
    <>
      { tags.map(tag => <Button key={tag} onClick={handleOnClick} className={classes.button} variant="contained" color="primary">#{tag}</Button>) }
      <br />
      <Button onClick={handleOnClickClear} className={classes.buttonClear} variant="outlined" color="primary">See All Resources</Button>
    </>
  )
}
