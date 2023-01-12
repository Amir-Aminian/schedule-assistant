import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";
import ForgotPassword from "../components/authentication/ForgotPassword";
import HomePage from "../components/homePage/HomePage";

const Routing = () => {
  return (
      <BrowserRouter>
        <Routes>        
          <Route path="/schedule-assistant" element={<SignIn />} />
          <Route path="/schedule-assistant/signUp" element={<SignUp />} />
          <Route path="/schedule-assistant/forgotPassword" element={<ForgotPassword />} />
          <Route path="/schedule-assistant/homePage" element={<HomePage />} />
          <Route path="/schedule-assistant/*" element={<h1>ERROR 404</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default Routing;
