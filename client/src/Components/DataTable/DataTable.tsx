import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {IData} from '../../App';
import './dataTable.css';

interface IDataTable {
    data: IData;
}

export default function DataTable({data}: IDataTable) {
    const {rows, columns} = data;
    return (
        <div className="table-container">
            <TableContainer component={Paper}>
                <Table stickyHeader={true}>

                    <TableHead>
                        <TableRow>
                            {columns.map((column, index) =>
                                <TableCell key={`${index}-${column}`}>{column}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row: any, rowIndex: number) => (
                            <TableRow key={`row-${rowIndex}`}>
                                {Object.keys(row).map((key, cellIndex) =>
                                    <TableCell key={`cell-${rowIndex}-${cellIndex}`}>{row[key]}</TableCell>)
                                }
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    );
}