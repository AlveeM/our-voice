import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function PrivateTravelsTable({privateTravels}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Destination</TableCell>
            <TableCell align="center">Traveler</TableCell>
            <TableCell align="center">Departure Date</TableCell>
            <TableCell align="center">Return Date</TableCell>
            <TableCell align="center">Sponsor</TableCell>
            <TableCell align="center">Doc Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {privateTravels.map((row) => (
            <TableRow key={row.destination + row.document_id}>
              <TableCell align="center" component="th" scope="row">
                {row.destination}
              </TableCell>
              <TableCell align="center">{row.traveler}</TableCell>
              <TableCell align="center">{row.departure_date}</TableCell>
              <TableCell align="center">{row.return_date}</TableCell>
              <TableCell>{row.sponsor}</TableCell>
              <TableCell align="center">{<Link href={`${row.pdf_url}`}>PDF</Link>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}