import { Collapse, IconButton, TableCell, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const CollapsibleTable = () => {
    const [open, setOpen] = useState(false)
    
    return (  
        <React.Fragment>   
            <TableRow>
                <TableCell align="right" size="small" >
                    <IconButton onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell size="small" colSpan={2}>
                    <Collapse in={open} align="left">
                        <Typography>Test1</Typography>
                        <Typography>Test2</Typography>
                        <Typography>Test3</Typography>
                        <Typography>Test4</Typography>         
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default CollapsibleTable;