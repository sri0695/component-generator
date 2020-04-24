import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('data1', 'data2', 45, 'data3', 56),
    createData('data1', 'data2', 45, 'data3', 56),
    createData('data1', 'data2', 45, 'data3', 56),
    createData('data1', 'data2', 45, 'data3', 56),
    createData('data1', 'data2', 45, 'data3', 56),
];


const TableComponentGen = ({ properties }) => {

    let input;
    input = properties.headers.map(header => {
        return (
            input = <TableCell align={header.align} style={{ minWidth: header.minWidth }}>{header.label}</TableCell>
        )
    });

    return (<div className='table-class'>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead style={{ backgroundColor: '#61dafb' }}>
                    <TableRow>
                        {input}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row" align="left">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.calories}</TableCell>
                            <TableCell align="left">{row.fat}</TableCell>
                            <TableCell align="left">{row.carbs}</TableCell>
                            <TableCell align="left">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>

    )
}

export default TableComponentGen