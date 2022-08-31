import { useState } from "react";
import SingIn from "./SingIn";
import SingUp from "./SingUp";

const Header = () => {
  const [tab, setTab] = useState ();
  return (
    <div className="header">
      <h1>Couple Assistant</h1>
      <button className="singIn" onClick={() => setTab(SingIn)}>Sing In</button>
      <button className="singUp" onClick={() => setTab(SingUp)}>Sing Up</button>
      {tab}
    </div>
  );
}
  
export default Header;
  