import { useState } from "react";
import SingIn from "../components/SingIn";
import SingUp from "../components/SingUp";
import ForgotPassword from "../components/ForgotPassword";

const Authentication = () => {
  const singIn = <button key={"singIn"} className="singIn" onClick={() => setTab([singIn, singUp, <SingIn key={"SingIn"} />, forgotPasswordLink])}>Sing In</button>;

  const singUp = <button key={"singUp"} className="singUp" onClick={() => setTab([singIn, singUp, <SingUp key={"SingUp"} />, singInLink])}>Sing Up</button>;

  const forgotPasswordLink = <button key={"forgotPasswordLink"} className="forgotPasswordLink" onClick={() => setTab([<ForgotPassword key={"ForgotPassword"} />, singIn])}>Forgto Your Password?</button>;

  const singInLink = <button key={"singInLink"} className="singInLink" onClick={() => setTab([singIn, singUp, <SingIn key={"SingInLink"} />, forgotPasswordLink])}>Already Have An Account? Sing In</button>;

  const [tab, setTab] = useState ([singIn, singUp, <SingIn key={"initialSingIn"} />, forgotPasswordLink]);
  
  return (
    <div className="authentication">
      <h1>Couple Assistant</h1>
      {tab}
    </div>
  );
}

export default Authentication;
