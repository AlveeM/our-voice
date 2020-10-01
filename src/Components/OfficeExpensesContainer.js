import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import OfficeExpensesTable from './OfficeExpensesTable';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: '20px',
    paddingBottom: '20px'
  },
}));

export default function OfficeExpensesContainer({ officeExpenses }) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      {officeExpenses.length !== 0 && <OfficeExpensesTable officeExpenses={officeExpenses} />}
    </Container>
  )
}
