import React,{useState} from 'react';
import {Box, Typography, Table,TableHead, TableBody,TableRow,TableCell} from '@mui/material';
import { AddRow } from '../AddTable/AddRow/AddRow';


export const AddTable = ({text, data, setData}) => {

    const[rows,addRows]=useState([0]);

  return (
    <>
                          {/* Table Header */}
        <Box>
            <Typography mt={1} mb={1} style={{color:'var(--color-text)'}}>{text}</Typography>

        <Table sx={{ minWidth: '100%',borderRadius:1, borderCollapse:'separate',
         border:'1px solid var(--color-border)' }} 
       >
        <TableHead sx={{borderRadius:'5px'}}>
          <TableRow >
            <TableCell></TableCell>
            <TableCell style={{color:'var(--color-text)',textAlign:'center'}}>KEY</TableCell>
            <TableCell style={{color:'var(--color-text)',textAlign:'center'}}>VALUE</TableCell>
            
          </TableRow>
        </TableHead>
                          {/* Table Body */}
        <TableBody sx={{borderRadius:'5px'}}>
            {
              rows.map((row,index)=>
              <AddRow
                addRows={addRows}
                rowId={index}
                key={index}
                data={data}
                setData={setData}
                style={{ color: 'var(--color-text)',
                        border: '1px solid var(--color-border)', borderRadius: '5px',
                        backgroundColor: 'var(--color-box-bg)'
                    }}
              />
              )
            }
            
        
        </TableBody>
      </Table>
        </Box>


    </>
  )
}

