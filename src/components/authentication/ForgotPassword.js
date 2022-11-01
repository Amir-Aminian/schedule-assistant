import { Box } from "@mui/material";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import UserEmail from "./forgotPassword/UserEmail";
import UserSQ from "./forgotPassword/UserSQ";


const ForgotPassword = () => {
    const {SQ} = useContext(UserContext);

    let context = <UserEmail />;

    if (SQ != undefined) {context = <UserSQ SQ1={SQ[0]} SQ2={SQ[1]} SQ3={SQ[2]} />};

    return (
        <Box>
            {context}
        </Box>
    );
}

export default ForgotPassword;
