import { InputLabel, TextField, Grid } from '@mui/material';

const InputForm = ({ type, id, text }) => {
    return (
        <Grid container direction="row" alignItems="center" justifyContent="center">
            <InputLabel htmlFor={id}>{text}</InputLabel>
            <TextField type={type} id={id} variant="filled" size="small" hiddenLabel />
        </Grid>
    )
}

export default InputForm;
