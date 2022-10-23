import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";
import ForgotPassword from "../components/authentication/ForgotPassword";
import { Container } from "@mui/material";
import HomePage from "../components/homePage/HomePage";
import { UserProvider } from "../contexts/UserContext";

const Authentication = () => {

  return (
    <Container maxWidth="xs" sx={{mt: 10 , mb: 10, backgroundColor: "white", borderRadius: "2%"}}>
      <BrowserRouter>
        <Routes>        
          <Route path="/" element={<SignIn />} />
          <Route path="singUp" element={<SignUp />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="homePage" element={<UserProvider><HomePage /> </UserProvider>} />                     
          <Route path="*" element={<h1>ERROR 404</h1>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default Authentication;
