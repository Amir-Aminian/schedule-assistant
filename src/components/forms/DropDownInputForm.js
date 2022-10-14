import { Select, MenuItem, FormControl, Grid, InputLabel } from "@mui/material";
import { Controller } from "react-hook-form";

const DropDownForm = ({ id, label, options, control }) => {
    return (
        <Grid container item>
            <Controller
                name={id}
                control={control}
                render={({field:{onChange, value}}) => (
                    <FormControl fullWidth size="small">
                        <InputLabel htmlFor={id+"Label"}>{label}</InputLabel>
                        <Select id={id} labelId={id+"Label"} label={label} onChange={onChange} value={value}>
                            {options.map((option) => (
                                <MenuItem key={option + id} value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
                />
        </Grid>
    );
}

export default DropDownForm;
