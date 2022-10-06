import { Grid, Tabs, Tab, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavigationBar =() => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box borderBottom={1} borderColor="divider">
            <Grid container direction="row" alignItems="center" justifyContent="center" >
                <Tabs value={value} onChange={handleChange}>
                    <Tab component={Link} to={"/"} label="Sing In" />
                    <Tab component={Link} to={"/singUp"} label="Sing Up" />
                </Tabs>
            </Grid>
        </Box>
    );
}

export default NavigationBar;
