import { forwardRef } from "react";
import { InputLabel, TextField } from '@mui/material';

const InputForm = ({ type, nameId, text, props }, ref) => {
    return (
        <div>
            <InputLabel htmlFor={nameId}>{text}</InputLabel>
            <TextField type={type} ref={ref} name={nameId} id={nameId} props />
        </div>
    )
}

export default forwardRef(InputForm);
