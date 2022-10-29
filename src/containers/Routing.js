import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";
import ForgotPassword from "../components/authentication/ForgotPassword";
import InvalidUser from "../components/authentication/InvalidUser";
import { Container } from "@mui/material";
import HomePage from "../components/homePage/HomePage";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Authentication = () => {
const {validated} = useContext(UserContext);

  return (
    <Container maxWidth="xs" sx={{mt: 10 , mb: 10, backgroundColor: "white", borderRadius: "2%"}}>
      <BrowserRouter>
        <Routes>        
          <Route path="/" element={<SignIn />} />
          <Route path="singUp" element={<SignUp />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="homePage" element={validated && <HomePage />} />
          <Route path="invalidUser" element={<InvalidUser />} />
          <Route path="*" element={<h1>ERROR 404</h1>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default Authentication;
