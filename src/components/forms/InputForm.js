import { forwardRef } from "react";
import { InputLabel, TextField } from '@mui/material';

const InputForm = ({ type, nameId, text }, ref) => {
    return (
        <div>
            <InputLabel htmlFor={nameId}>{text}</InputLabel>
            <TextField type={type} ref={ref} name={nameId} id={nameId} variant="filled" />
        </div>
    )
}

export default forwardRef(InputForm);
