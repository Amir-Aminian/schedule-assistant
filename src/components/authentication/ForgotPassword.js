import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import InputForm from "../forms/InputForm";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
    const { control, handleSubmit } = useForm();
    
    const submit = (data) => {
        console.log(data);
    };

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
                <h2>Forgot Your Password?</h2>
            </Grid>
            <Grid item>
                <p>Please answer these three security questions to retrive your password.</p>
            </Grid>
            <Grid item>
                <form onSubmit={handleSubmit(submit)}>
                    <Grid container item direction="column" alignItems="center" justifyContent="center" spacing={2}>
                        <InputForm type="text" id="SA1" label="Answer first security question" control={control} />
                        <InputForm type="text" id="SA2" label="Answer the second question" control={control} />
                        <InputForm type="text" id="SA3" label="Answer the third question" control={control} />
                        <Grid item>
                            <Button type="submit" variant="contained" size="small">Submit</Button>
                        </Grid>
                        <Grid container item justifyContent="flex-end" sx={{mb: 4}}>
                            <Link to={"/"}>Back to Sign In page</Link>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}

export default ForgotPassword;
