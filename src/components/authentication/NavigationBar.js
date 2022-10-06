import { Grid, Tabs, Tab, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavigationBar =({ tabIndex }) => {
    return (
        <Box borderBottom={1} borderColor="divider">
            <Grid container direction="row" alignItems="center" justifyContent="center" >
                <Tabs value={tabIndex}>
                    <Tab component={Link} to={"/"} label="Sing In" />
                    <Tab component={Link} to={"/singUp"} label="Sing Up" />
                </Tabs>
            </Grid>
        </Box>
    );
}

export default NavigationBar;
