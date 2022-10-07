import InputForm from "../forms/InputForm";
import { Link } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";
import NavigationBar from "./NavigationBar";
import { useRef } from "react";

const SignIn = () => {
    const usernameRef = useRef();

    const passwordRef = useRef();

    const signIn = () => {
        console.log({
            username: usernameRef.current.value,
            password: passwordRef.current.value
        })
    };

    return (
        <Box>
        <NavigationBar tabIndex={0} />
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
                <h2>Sign In</h2>
            </Grid>
            <InputForm type="text" id="username" label="Username" ref={usernameRef} />
            <InputForm type="password" id="password" label="Password" ref={passwordRef} />
            <Grid item>
                <Link to={"/forgotPassword"}>Forgot Your Password?</Link>
            </Grid>
            <Grid item>
                <Button variant="contained" size="small" onClick={signIn}>Sign In</Button>
            </Grid>
        </Grid>
        </Box>
    );
}

export default SignIn;
