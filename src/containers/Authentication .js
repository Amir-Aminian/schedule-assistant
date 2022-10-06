import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "../components/authentication/NavigationBar";
import SingIn from "../components/authentication/SingIn";
import SingUp from "../components/authentication/SingUp";
import ForgotPassword from "../components/authentication/ForgotPassword";



const Authentication = () => {
  return (
    <BrowserRouter>
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
