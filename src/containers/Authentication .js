import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticationNavBar from "../components/Authentication/AuthenticationNavBar";
import SingIn from "../components/Authentication/SingIn";
import SingUp from "../components/Authentication/SingUp";
import ForgotPassword from "../components/Authentication/ForgotPassword";



const Authentication = () => {
  return (
    <BrowserRouter>
      <AuthenticationNavBar />
      <Routes>        
        <Route path="/" element={<SingIn />} />
        <Route path="singUp" element={<SingUp />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="*" element={<h1>ERROR 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Authentication;
