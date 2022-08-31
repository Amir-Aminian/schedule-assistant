import { useState } from "react";
import SingIn from "./SingIn";
import SingUp from "./SingUp";
import ForgotPassword from "./ForgotPassword";

const Header = () => {
  const [tab, setTab] = useState (SingIn);
  return (
    <div className="header">
      <h1>Couple Assistant</h1>
      <button className="singIn" onClick={() => setTab(SingIn)}>Sing In</button>
      <button className="singUp" onClick={() => setTab(SingUp)}>Sing Up</button>
      {tab}
      <button className="forgotPassword" onClick={() => setTab(ForgotPassword)}>Forgot Your Password?</button>
    </div>
  );
}
  
export default Header;
  