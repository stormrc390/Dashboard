import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ContestantsTable = ({ contestants }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contestants.map((contestant, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{contestant.name}</TableCell>
              <TableCell>{contestant.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContestantsTable;
