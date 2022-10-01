import { TextField, Grid } from '@mui/material';

const InputForm = ({ type, id, label }) => {
    return (
        <Grid item>
            <TextField type={type} id={id} label={label} variant="filled" size="small" />
        </Grid>
    )
}

export default InputForm;
