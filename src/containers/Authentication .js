import { useState } from "react";
import SingIn from "../components/SingIn";
import SingUp from "../components/SingUp";
import ForgotPassword from "../components/ForgotPassword";

const Header = () => {
  const [tab, setTab] = useState (SingIn);
  return (
    <div className="header">
      <h1>Couple Assistant</h1>
      <button className="singIn" onClick={() => setTab(SingIn)}>Sing In</button>
      <button className="singUp" onClick={() => setTab(SingUp)}>Sing Up</button>
      <button className="forgotPassword" onClick={() => setTab(ForgotPassword)}>Forgto Your Password?</button>
      {tab}
    </div>
  );
}
  
export default Header;
