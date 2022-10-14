import { TextField, Grid } from '@mui/material';
import { Controller } from 'react-hook-form';

const InputForm = ({ type, id, label, control }) => {
    return (
        <Grid container item>
            <Controller
                name={id}
                control={control}
                defaultValue=""
                render={({field:{onChange, value}}) => (
                    <TextField type={type} id={id} label={label} onChange={onChange} value={value} variant="filled" size="small" />
                )}
            />
        </Grid>
    );
}

export default InputForm;
