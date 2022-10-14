import InputForm from "../forms/InputForm";
import DropDownForm from "../forms/DropDownInputForm";
import { Link, useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import NavigationBar from "./NavigationBar";
import Register from "../../utilities/Register";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { control, handleSubmit } = useForm();

    const navigate = useNavigate();


    const submit = (data) => {
        Register(data);
        navigate("/");
    };

    const securityQuestions = ["In what city were you born?", "What is the name of your favorite pet?", "What is your mother's maiden name?", "What high school did you attend?", "What was the name of your elementary school?", "What was the make of your first car?", "What was your favorite food as a child?", "Where did you meet your spouse?", "What year was your father (or mother) born?"];

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
                <NavigationBar tabIndex={1} />
            </Grid>
            <Grid item>
                <h2>Sign Up</h2>
            </Grid>
            <Grid item>
                <form onSubmit={handleSubmit(submit)}>
                    <Grid container item direction="column" alignItems="center" justifyContent="center" spacing={2}>
                        <InputForm type="text" id="username" label="Username" control={control} />
                        <InputForm type="text" id="emailAddress" label="Email Address" control={control} />
                        <InputForm type="password" id="password" label="Password" control={control} />
                        <InputForm type="password" id="confirmPassword" label="Confirm Password" control={control} />
                        <Grid item>
                            <h3>Security Questions</h3>
                        </Grid>
                        <Grid item>
                            <p>Select and answer three security questions. These questions will help us verify your identity should you forget your password.</p>
                        </Grid>
                        <DropDownForm id="SQ1" label={"Select first security question"} options={securityQuestions} control={control} />
                        <InputForm type="text" id="SA1" label="Answer first security question" control={control} />
                        <DropDownForm id="SQ2" label={"Select second security question"} options={securityQuestions} control={control} />
                        <InputForm type="text" id="SA2" label="Answer second security question" control={control} />
                        <DropDownForm id="SQ3" label={"Select third security question"} options={securityQuestions} control={control} />
                        <InputForm type="text" id="SA3" label="Answer third security question" control={control} />
                        <Grid container item justifyContent="flex-end">
                            <Link to={"/"}>Already have an account? Sign In</Link>
                        </Grid>
                        <Grid item>
                            <Button type="submit" variant="contained" size="small" sx={{mb: 4}}>Sign Up</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>           
        </Grid>
    );
}

export default SignUp;
