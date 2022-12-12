import { Container, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SetWeek from "../../utilities/SetWeek";
import WeekTable from "./WeekTable";

const HomePage = () => {
    const navigate = useNavigate();

    const [date, setDate] = useState(new Date());

    const nextWeek = () => {
        setDate(new Date(date.setDate(date.getDate()+7)));
    };

    const thisWeek = () => {
        setDate(new Date());
    };

    const previousWeek = () => {
        setDate(new Date(date.setDate(date.getDate()-7)));
    };

    useEffect(() => {
        if (localStorage.getItem("userEmail")==undefined) {
            alert("You are not signed in");
            navigate("/");
        }
    }, []);

    if (localStorage.getItem("userEmail")!=undefined) {
        return (
            <Container maxWidth="lg" sx={{mt: 5 , mb: 5, backgroundColor: "white", borderRadius: "1%"}}>
                <Grid container direction="column" alignItems="center" justifyContent="center" spacing={1}>
                    <Grid container item direction="row" alignItems="center" justifyContent="center" spacing={0.34}>
                        <Grid item>
                            <Button onClick={previousWeek} variant="contained" size="small">Previous Week</Button>
                        </Grid>
                            <Grid item>
                        <Button onClick={thisWeek} variant="contained" size="small">This Week</Button>
                            </Grid>
                        <Grid item>
                            <Button onClick={nextWeek} variant="contained" size="small">Next Week</Button>
                        </Grid>
                    </Grid>
                    <WeekTable year={SetWeek(date).year} month={SetWeek(date).month} weekDays={SetWeek(date).weekDays} />
                </Grid>
            </Container>
        );
    };   
}

export default HomePage;
