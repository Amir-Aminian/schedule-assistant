import { Collapse, IconButton, TableCell, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const CollapsibleTable = () => {
    const [open, setOpen] = useState(false)
    
    return (     
        <TableRow>
            <TableCell colSpan={2} align="right" size="small">
                <IconButton onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                <Collapse in={open} align="left">
                    <Typography>Test1</Typography>
                    <Typography>Test2</Typography>
                    <Typography>Test3</Typography>
                    <Typography>Test4</Typography>         
                </Collapse>
            </TableCell>
        </TableRow>
    );
}

export default CollapsibleTable;