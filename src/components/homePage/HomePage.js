import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SetWeek from "../../utilities/SetWeek";

const HomePage = () => {
    const navigate = useNavigate();

    let date = new Date("2022-02-26");

    let startDate = SetWeek(date)[0];

    let endDate = SetWeek(date)[1];

    let month = SetWeek(date)[2];

    useEffect(() => {
        if (localStorage.getItem("userEmail")==undefined) {
            alert("You are not signed in");
            navigate("/");
        }
    }, []);

    if (localStorage.getItem("userEmail")!=undefined) {
        return (
            <Box>
                <h2>{month}</h2>
                <h2>{startDate}</h2>
                <h2>{endDate}</h2>
            </Box>
        );
    }    
}

export default HomePage;
