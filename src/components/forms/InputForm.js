import { TextField, Grid } from '@mui/material';

const InputForm = ({ type, id, label }) => {
    return (
        <Grid container item>
            <TextField type={type} id={id} label={label} variant="filled" size="small" fullWidth />
        </Grid>
    )
}

export default InputForm;
