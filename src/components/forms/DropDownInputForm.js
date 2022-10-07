import { Select, MenuItem, FormControl, Grid, InputLabel } from "@mui/material";
import { forwardRef } from 'react';

const DropDownForm = ({ id, label, options }, ref) => {
    return (
        <Grid container item>
            <FormControl fullWidth size="small">
                <InputLabel htmlFor={id+"Label"}>{label}</InputLabel>
                <Select id={id} labelId={id+"Label"} label={label} inputRef={ref}>
                    {options.map((option) => (
                        <MenuItem key={option + id} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
}

export default forwardRef(DropDownForm);
