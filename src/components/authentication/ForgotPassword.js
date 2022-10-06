import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import InputForm from "../forms/InputForm";

const ForgotPassword = () => {
    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
                <h2>Forgot Your Password?</h2>
            </Grid>
            <Grid item>
                <p>Please answer these three security questions to retrive your password.</p>
            </Grid>
            <InputForm type="text" id="firsQuestion" label="Answer the first question" />
            <InputForm type="text" id="secondQuestion" label="Answer the second question" />
            <InputForm type="text" id="thirdQuestion" label="Answer the third question" />
            <Grid item>
                <Button variant="contained" size="small" onClick={() => alert()}>Submit</Button>
            </Grid>
            <Grid item>
                <Link to={"/"}>Back to Sign In page</Link>
            </Grid>
        </Grid>
    );
}

export default ForgotPassword;