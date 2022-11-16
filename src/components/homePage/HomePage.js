import { Container, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SetWeek from "../../utilities/SetWeek";
import WeekTable from "../tables/WeekTable";

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
            <Container maxWidth="md" sx={{mt: 10 , mb: 10, backgroundColor: "white", borderRadius: "2%"}}>
                <Grid container direction="row" alignItems="center" justifyContent="center" spacing={4}>
                    <Grid item>
                        <Button onClick={previousWeek} variant="contained" size="small" sx={{mb: 4}}>Previous Week</Button>
                    </Grid>
                        <Grid item>
                    <Button onClick={thisWeek} variant="contained" size="small" sx={{mb: 4}}>This Week</Button>
                        </Grid>
                    <Grid item>
                        <Button onClick={nextWeek} variant="contained" size="small" sx={{mb: 4}}>Next Week</Button>
                    </Grid>
                </Grid>
                <WeekTable year={SetWeek(date).year} month={SetWeek(date).month} weekDates={SetWeek(date).weekDates} />
            </Container>
        );
    };   
}

export default HomePage;
