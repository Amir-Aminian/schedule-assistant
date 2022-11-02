import { Box, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import InputForm from "../../../forms/InputForm";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import UserContext from "../../../contexts/UserContext";

const UserSQ = ({SQ1, SQ2, SQ3}) => {
    const {setSQ, SA, setSA} = useContext(UserContext);

    const { control, handleSubmit } = useForm();
    
    const submit = (data) => {
        if (data.SA1===SA[0] && data.SA2===SA[1] && data.SA3===SA[2]) {
            setSA(true);
            setSQ(undefined);
        } else {
            alert("You have entered wrong security question's answer")
        }
    };

    return (
        <Box>
            <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
                <Grid item>
                    <h2>Forgot Your Password?</h2>
                </Grid>
                <Grid item>
                    <p>Please answer these three security questions to reset your password.</p>
                </Grid>
                <Grid item>
                    <form onSubmit={handleSubmit(submit)}>
                        <Grid container item direction="column" alignItems="center" justifyContent="center" spacing={2} width={400}>
                            <InputForm type="text" id="SA1" label={SQ1} control={control} rules={{required: "This field is required"}} />
                            <InputForm type="text" id="SA2" label={SQ2} control={control} rules={{required: "This field is required"}} />
                            <InputForm type="text" id="SA3" label={SQ3} control={control} rules={{required: "This field is required"}} />
                            <Grid item>
                                <Button type="submit" variant="contained" size="small">Submit</Button>
                            </Grid>
                            <Grid container item justifyContent="flex-end" sx={{mb: 4}}>
                                <Link to={"/"} onClick={() => setSQ(undefined)}>Back to Sign In page</Link>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
}

export default UserSQ;
