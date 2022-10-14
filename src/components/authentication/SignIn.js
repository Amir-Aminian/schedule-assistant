import InputForm from "../forms/InputForm";
import { Link } from "react-router-dom";
import { Button, Grid, Box } from "@mui/material";
import NavigationBar from "./NavigationBar";
import { useForm } from "react-hook-form";

const SignIn = () => {
    const { control, handleSubmit } = useForm();
    
    const submit = (data) => {
        console.log(data);
    };

    return (
        <Box>
            <NavigationBar tabIndex={0} />
            <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
                <Grid item>
                    <h2>Sign In</h2>
                </Grid>
                <Grid item>
                    <form onSubmit={handleSubmit(submit)}>
                        <Grid container item direction="column" alignItems="center" justifyContent="center" spacing={2} width={250}>
                            <InputForm type="text" id="username" label="Username" control={control} />
                            <InputForm type="password" id="password" label="Password" control={control} />
                            <Grid container item justifyContent="flex-end">
                                <Link to={"/forgotPassword"}>Forgot Your Password?</Link>
                            </Grid>
                            <Grid item>
                                <Button type="submit" variant="contained" size="small" sx={{mb: 4}}>Sign In</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SignIn;
