import { Container } from "@mui/material";
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

    const today = () => {
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
                <button onClick={previousWeek}>Previous Week</button>
                <button onClick={today}>This Week</button>
                <button onClick={nextWeek}>Next Week</button>
                <WeekTable year={SetWeek(date).year} month={SetWeek(date).month} weekDates={SetWeek(date).weekDates}></WeekTable>
            </Container>
        );
    };   
}

export default HomePage;
