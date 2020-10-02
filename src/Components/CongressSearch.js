import React, { useState } from 'react'

import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

export default function CongressSearch({ setQuery }) {
  const [input, setInput] = useState("")

  const handleOnChange = (e) => {
    setInput(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setQuery(input.toLowerCase())
  }

  return (
    <form onSubmit={handleOnSubmit} noValidate autoComplete="off">
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="search"
        label="Search Member"
        name="search"
        value={input}
        onChange={handleOnChange}
      />
    </form>
  )
}
