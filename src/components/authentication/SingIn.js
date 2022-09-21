import InputForm from "../forms/InputForm";
import { useRef } from "react";
import { Link } from "react-router-dom";

const SingIn = () => {
    const usernameRef = useRef();

    const passwordRef = useRef();

    const submit = () => {
        console.log({
            username: usernameRef.current.value,
            password: passwordRef.current.value
        });
    }

    return (
        <>
            <form className="singIn" >
                <h2>Sing In</h2>
                <InputForm type="text" ref={usernameRef} nameId="username" text="Username:" />
                <InputForm type="text" ref={passwordRef} nameId="password" text="Password:" />
                <input type="button" onClick={submit} value={"Sing In"} />
            </form>
            <nav>
                <ul>
                    <li>
                        <Link to={"/forgotPassword"}>Forgot Your Password?</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default SingIn;
