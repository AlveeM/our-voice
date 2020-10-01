import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function OfficeExpensesTable({officeExpenses}) {
  const classes = useStyles();
  const totalsRow = officeExpenses[0]

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="right">Amount&nbsp;(USD)</TableCell>
            <TableCell align="right">Year to Date</TableCell>
            <TableCell align="right">Quarterly Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {officeExpenses.slice(1).map((row) => (
            <TableRow key={row.category}>
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell align="right">${row.amount}</TableCell>
              <TableCell align="right">{row.year_to_date}</TableCell>
              <TableCell align="right">{row.change_from_previous_quarter}</TableCell>
            </TableRow>
          ))}
          {
            <TableRow key={totalsRow.category}>
              <TableCell component="th" scope="row">
                {totalsRow.category}
              </TableCell>
              <TableCell align="right">${totalsRow.amount}</TableCell>
              <TableCell align="right">{totalsRow.year_to_date}</TableCell>
              <TableCell align="right">{totalsRow.change_from_previous_quarter}</TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}