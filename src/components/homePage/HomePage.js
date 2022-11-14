import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SetWeek from "../../utilities/SetWeek";

const HomePage = () => {
    const navigate = useNavigate();

    let date = new Date();

    useEffect(() => {
        if (localStorage.getItem("userEmail")==undefined) {
            alert("You are not signed in");
            navigate("/");
        }
    }, []);

    if (localStorage.getItem("userEmail")!=undefined) {
        return (
            <Box>
                <h2>{SetWeek(date).month}</h2>
                <h2>{SetWeek(date).weekDates[0]}</h2>
                <h2>{SetWeek(date).weekDates[1]}</h2>
                <h2>{SetWeek(date).weekDates[2]}</h2>
                <h2>{SetWeek(date).weekDates[3]}</h2>
                <h2>{SetWeek(date).weekDates[4]}</h2>
                <h2>{SetWeek(date).weekDates[5]}</h2>
                <h2>{SetWeek(date).weekDates[6]}</h2>
            </Box>
        );
    }    
}

export default HomePage;
