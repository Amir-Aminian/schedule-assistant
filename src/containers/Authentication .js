import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticationNavBar from "../components/AuthenticationNavBar";
import SingIn from "../components/SingIn";
import SingUp from "../components/SingUp";
import ForgotPassword from "../components/ForgotPassword";



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
