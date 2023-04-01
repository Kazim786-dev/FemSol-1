

import { Box, Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
// import { Check, Close, Edit } from '@mui/icons-material';
// import {CheckOutlined, CloseOutlined, EditOutlined} from '@mui/icons-material';

function BorderedTable() {

function createData( Employes, ID, Department, LeaveType, Duration,Date,Reason) {
  return { ID, Employes, Department, LeaveType, Duration, Date, Reason };
}

let rows = [
  createData(
    'Robert' ,
    '001',
    "Human Resource", 
    "Medical", 
    "2 Days", 
    "15th Mar - 17th Mar", 
    "Personal Issue")
];
rows = Array(10).fill(rows).flat()


  return (
    <Box sx={{ border: '1px solid grey', borderRadius: '12px', width: '100%', overflowX: 'auto' }}>
      <Table id="leavetable" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>ID</b></TableCell>
            <TableCell align="center"><b>Employes</b></TableCell>
            <TableCell align="center"><b>Department </b></TableCell>
            <TableCell align="center"><b>LeaveType </b></TableCell>
            <TableCell align="center"><b>Duration </b></TableCell>
            <TableCell align="center"><b>Date </b></TableCell>
            <TableCell align="center"><b>Reason </b></TableCell>
            <TableCell align="center"><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              
              <TableCell sx={{ fontSize: '14px', padding: '5px' }} align="center">{row.ID}</TableCell>
              <TableCell sx={{ fontSize: '14px', padding: '5px' }} align="center">{row.Employes}</TableCell>
              <TableCell sx={{ fontSize: '14px', padding: '5px' }} align="center">{row.Department}</TableCell>
              <TableCell sx={{ fontSize: '14px', padding: '5px' }} align="center">{row.LeaveType}</TableCell>
              <TableCell sx={{ fontSize: '14px', padding: '5px' }} align="center">{row.Duration}</TableCell>
              <TableCell sx={{ fontSize: '14px', padding: '5px' }} align="center">{row.Date}</TableCell>
              <TableCell sx={{ fontSize: '14px', padding: '5px' }} align="center">{row.Reason}</TableCell>
              <TableCell sx={{ fontSize: '14px', padding: '5px' }} align="center">
                
              <Box sx={{ display: 'inline-block', borderRadius: '10px', backgroundColor: 'lightgreen', opacity: '0.4' }}>
                <IconButton sx={{ color: 'white', fontSize: '1rem' }}>
                  <i class="bi bi-check-circle" style={{  fontSize: 22, color:"green" }}></i>
                </IconButton>
              </Box>
              

              <Box sx={{ display: 'inline-block', borderRadius: '10px', backgroundColor: 'pink', opacity: '0.6' }}>
                <IconButton>
                  <i class="bi bi-x-circle" style={{ fontSize: 22, color:"red" }}></i>
                </IconButton>
              </Box>

              <Box sx={{ display: 'inline-block', borderRadius: '10px', backgroundColor: 'skyblue', opacity: '0.4' }}>
                <IconButton>
                  <i class="bi bi-pencil-square bi-stroke" style={{ fontSize: 21, color:"blue" }}></i>
                </IconButton>
              </Box>
              

            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>



  );
}

export default BorderedTable;

