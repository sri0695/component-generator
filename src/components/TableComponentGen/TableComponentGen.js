import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('data1','data2',45,'data3',56),
    createData('data1','data2',45,'data3',56),
    createData('data1','data2',45,'data3',56),
    createData('data1','data2',45,'data3',56),
    createData('data1','data2',45,'data3',56),
  ];


const TableComponentGen = ({ properties }) => {

    let tableInput = properties.map((inputItem) => {
        let input;
        if (inputItem.type === 'table') {
            input = inputItem.headers.map(header => {
                return (
                    <TableCell align={header.align}>{header.label}</TableCell>
                )
            });

            return (<Grid item xs ={12}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {input}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row" align ="left">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="left">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            )
        }
    });
    return tableInput
}

export default TableComponentGen