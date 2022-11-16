import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SetWeek from "../../utilities/SetWeek";

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
                <button onClick={today}>Today</button>
                <button onClick={nextWeek}>Next Week</button>
                <h2>{SetWeek(date).year}</h2>
                <h2>{SetWeek(date).month}</h2>
                <h2>{SetWeek(date).weekDates[0]}</h2>
                <h2>{SetWeek(date).weekDates[1]}</h2>
                <h2>{SetWeek(date).weekDates[2]}</h2>
                <h2>{SetWeek(date).weekDates[3]}</h2>
                <h2>{SetWeek(date).weekDates[4]}</h2>
                <h2>{SetWeek(date).weekDates[5]}</h2>
                <h2>{SetWeek(date).weekDates[6]}</h2>
            </Container>
        );
    };   
}

export default HomePage;
