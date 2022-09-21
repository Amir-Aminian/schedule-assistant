import { Link } from "react-router-dom";

const AuthenticationNavBar =() => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Sing In</Link>
                    </li>
                    <li>
                        <Link to={"/singUp"}>Sing Up</Link>
                    </li>
                </ul>
            </nav>
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

export default AuthenticationNavBar;
