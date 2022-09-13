import InputForm from "./forms/InputForm";
import DropDownInputForm from "./forms/DropDownInputForm";

const SingUp = () => {
    const list = [
        {
            id: 1,
            listId: 11,
            label: "Select first security question:",
            className: "firstSecurityQuestion",
            text: ["Please Select", "In what city were you born?", "What is the name of your favorite pet?", "What is your mother's maiden name?", "What high school did you attend?", "What was the name of your elementary school?", "What was the make of your first car?", "What was your favorite food as a child?", "Where did you meet your spouse?", "What year was your father (or mother) born?"],
            formLabel: "Answer first security question:",
            type: "text"
        }
    ]

    return (
        <div className="singUp">
            <h3>Sing Up</h3>
            <InputForm type="text" nameId="username" text="Username:" />
            <InputForm type="text" nameId="emailAddress" text="Email Address:" />
            <InputForm type="text" nameId="password" text="Password:" />
            <InputForm type="text" nameId="confirmPassword" text="Confirm Password:" />
            <DropDownInputForm className={"securityQuestions"} title={"Security Questions"} text={"Select a security question. This question will help us verify your identity should you forget your password."} lists={list} />
            <input type="button" value={"Sing Up"} />
        </div>
    );
}

export default SingUp;
