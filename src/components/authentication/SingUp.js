import InputForm from "../forms/InputForm";
import DropDownForm from "../forms/DropDownInputForm";
import { Link } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";
import NavigationBar from "./NavigationBar";

const SingUp = () => {
    const securityQuestions = ["In what city were you born?", "What is the name of your favorite pet?", "What is your mother's maiden name?", "What high school did you attend?", "What was the name of your elementary school?", "What was the make of your first car?", "What was your favorite food as a child?", "Where did you meet your spouse?", "What year was your father (or mother) born?"];

    return (
        <Box>
        <NavigationBar />
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
                <h2>Sing Up</h2>
            </Grid>
            <InputForm type="text" id="username" label="Username" />
            <InputForm type="text" id="emailAddress" label="Email Address" />
            <InputForm type="text" id="password" label="Password" />
            <InputForm type="text" id="confirmPassword" label="Confirm Password" />
            <Grid item>
                <h3>Security Questions</h3>
            </Grid>
            <Grid item>
                <p>Select and answer three security questions. These questions will help us verify your identity should you forget your password.</p>
            </Grid>
            <DropDownForm id={1} label={"Select first security question"} options={securityQuestions} />
            <InputForm type="text" id="firstSecurityAnswer" label="Answer first security question" />
            <DropDownForm id={2} label={"Select second security question"} options={securityQuestions} />
            <InputForm type="text" id="secondSecurityAnswer" label="Answer second security question" />
            <DropDownForm id={3} label={"Select third security question"} options={securityQuestions} />
            <InputForm type="text" id="thirdSecurityAnswer" label="Answer third security question" />
            <Grid item>
                <Link to={"/"}>Already have an account? Sing In</Link>
            </Grid>
            <Grid item>
                <Button variant="contained" size="small" onClick={() => alert()}>Sing Up</Button>
            </Grid>           
        </Grid>
        </Box>
    );
}

export default SingUp;
