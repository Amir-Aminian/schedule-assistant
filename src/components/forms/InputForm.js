import { TextField, Grid } from '@mui/material';
import { forwardRef } from 'react';

const InputForm = ({ type, id, label }, ref) => {
    return (
        <Grid container item>
            <TextField type={type} id={id} label={label} inputRef={ref} variant="filled" size="small" fullWidth />
        </Grid>
    )
}

export default forwardRef(InputForm);
