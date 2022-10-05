import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const NavigationBar =() => {
    return (
        <Grid container direction="row" alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
                <Link to={"/"}><p>Sing In</p></Link>
            </Grid>
            <Grid item>
                <Link to={"/singUp"}><p>Sing Up</p></Link>
            </Grid>
        </Grid>
    );
}

export default NavigationBar;
