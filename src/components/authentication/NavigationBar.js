import { Grid, Tabs, Tab, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavigationBar =({ tabIndex }) => {
    return (
        <Grid container direction="row" alignItems="center" justifyContent="center" borderBottom={1} borderColor="divider">
            <Tabs value={tabIndex}>
                <Tab component={Link} to={"/"} label="Sing In" />
                <Tab component={Link} to={"/singUp"} label="Sing Up" />
            </Tabs>
        </Grid>
    );
}

export default NavigationBar;
