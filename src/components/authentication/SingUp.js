import InputForm from "../forms/InputForm";
import DropDownForm from "../forms/DropDownInputForm";
import { Link } from "react-router-dom";

const SingUp = () => {
    const securityQuestions = ["Please Select", "In what city were you born?", "What is the name of your favorite pet?", "What is your mother's maiden name?", "What high school did you attend?", "What was the name of your elementary school?", "What was the make of your first car?", "What was your favorite food as a child?", "Where did you meet your spouse?", "What year was your father (or mother) born?"];

    return (
        <>
            <form className="singUp">
                <h2>Sing Up</h2>
                <InputForm type="text" nameId="username" text="Username:" />
                <InputForm type="text" nameId="emailAddress" text="Email Address:" />
                <InputForm type="text" nameId="password" text="Password:" />
                <InputForm type="text" nameId="confirmPassword" text="Confirm Password:" />
                <h3>Security Questions</h3>
                <p>Select and answer three security questions. These questions will help us verify your identity should you forget your password.</p>
                <DropDownForm id={1} name={"firstSecurityQuestion"} label={"Select first security question:"} options={securityQuestions} />
                <InputForm type="text" nameId="firstSecurityAnswer" text="Answer first security question:" />
                <DropDownForm id={2} name={"secondSecurityQuestion"} label={"Select second security question:"} options={securityQuestions} />
                <InputForm type="text" nameId="secondSecurityAnswer" text="Answer second security question:" />
                <DropDownForm id={3} name={"thirdSecurityQuestion"} label={"Select third security question:"} options={securityQuestions} />
                <InputForm type="text" nameId="thirdSecurityAnswer" text="Answer third security question:" />
                <input type="button" value={"Sing Up"} />
            </form>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Already have an account? Sing In</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default SingUp;
