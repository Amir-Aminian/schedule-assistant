import InputForm from "../forms/InputForm";
import DropDownForm from "../forms/DropDownInputForm";
import { Link } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";
import NavigationBar from "./NavigationBar";
import Register from "../../utilities/Register";
import { useRef } from "react";

const SignUp = () => {
    const usernameRef = useRef();

    const emailAddressRef = useRef();

    const passwordRef = useRef();

    const confirmPasswordRef = useRef();

    const SQ1Ref = useRef();

    const SA1Ref = useRef();

    const SQ2Ref = useRef();

    const SA2Ref = useRef();

    const SQ3Ref = useRef();

    const SA3Ref = useRef();

    const getData = () => {
        const userData={
            username: usernameRef.current.value,
            emailAddress: emailAddressRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: confirmPasswordRef.current.value,
            SQ1: SQ1Ref.current.value,
            SA1: SA1Ref.current.value,
            SQ2: SQ2Ref.current.value,
            SA2: SA2Ref.current.value,
            SQ3: SQ3Ref.current.value,
            SA3: SA3Ref.current.value
        };

        return(userData);
    };

    const securityQuestions = ["In what city were you born?", "What is the name of your favorite pet?", "What is your mother's maiden name?", "What high school did you attend?", "What was the name of your elementary school?", "What was the make of your first car?", "What was your favorite food as a child?", "Where did you meet your spouse?", "What year was your father (or mother) born?"];

    return (
        <Box>
        <NavigationBar tabIndex={1} />
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
                <h2>Sign Up</h2>
            </Grid>
            <InputForm type="text" id="username" label="Username" ref={usernameRef} />
            <InputForm type="text" id="emailAddress" label="Email Address" ref={emailAddressRef} />
            <InputForm type="text" id="password" label="Password" ref={passwordRef} />
            <InputForm type="text" id="confirmPassword" label="Confirm Password" ref={confirmPasswordRef} />
            <Grid item>
                <h3>Security Questions</h3>
            </Grid>
            <Grid item>
                <p>Select and answer three security questions. These questions will help us verify your identity should you forget your password.</p>
            </Grid>
            <DropDownForm id={"SQ1"} label={"Select first security question"} options={securityQuestions} ref={SQ1Ref} />
            <InputForm type="text" id="firstSecurityAnswer" label="Answer first security question" ref={SA1Ref} />
            <DropDownForm id={"SQ2"} label={"Select second security question"} options={securityQuestions} ref={SQ2Ref} />
            <InputForm type="text" id="secondSecurityAnswer" label="Answer second security question" ref={SA2Ref} />
            <DropDownForm id={"SQ3"} label={"Select third security question"} options={securityQuestions} ref={SQ3Ref} />
            <InputForm type="text" id="thirdSecurityAnswer" label="Answer third security question" ref={SA3Ref} />
            <Grid item>
                <Link to={"/"}>Already have an account? Sign In</Link>
            </Grid>
            <Grid item>
                <Button variant="contained" size="small" onClick={() => Register(getData())}>Sign Up</Button>
            </Grid>           
        </Grid>
        </Box>
    );
}

export default SignUp;
