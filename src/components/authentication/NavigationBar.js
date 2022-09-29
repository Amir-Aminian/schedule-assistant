import { Link } from "react-router-dom";

const NavigationBar =() => {
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
        </>
    );
}

export default NavigationBar;
