import InputForm from "./forms/InputForm";
import DropDownForm from "./forms/DropDownInputForm";

const SingUp = () => {
    const list1 = {
        id: 1,
        label: "Select first security question:",
        name: "firstSecurityQuestion",
        options: ["Please Select", "In what city were you born?", "What is the name of your favorite pet?", "What is your mother's maiden name?", "What high school did you attend?", "What was the name of your elementary school?", "What was the make of your first car?", "What was your favorite food as a child?", "Where did you meet your spouse?", "What year was your father (or mother) born?"],
    }
    const list2 = {
        id: 2,
        label: "Select first security question:",
        name: "firstSecurityQuestion",
        options: ["Please Select", "In what city were you born?", "What is the name of your favorite pet?", "What is your mother's maiden name?", "What high school did you attend?", "What was the name of your elementary school?", "What was the make of your first car?", "What was your favorite food as a child?", "Where did you meet your spouse?", "What year was your father (or mother) born?"],
    }
    const list3 = {
        id: 3,
        label: "Select first security question:",
        name: "firstSecurityQuestion",
        options: ["Please Select", "In what city were you born?", "What is the name of your favorite pet?", "What is your mother's maiden name?", "What high school did you attend?", "What was the name of your elementary school?", "What was the make of your first car?", "What was your favorite food as a child?", "Where did you meet your spouse?", "What year was your father (or mother) born?"],
    }

    return (
        <form className="singUp">
            <h2>Sing Up</h2>
            <InputForm type="text" nameId="username" text="Username:" />
            <InputForm type="text" nameId="emailAddress" text="Email Address:" />
            <InputForm type="text" nameId="password" text="Password:" />
            <InputForm type="text" nameId="confirmPassword" text="Confirm Password:" />
            <h3>Security Questions</h3>
            <p>Select and answer three security questions. These questions will help us verify your identity should you forget your password.</p>
            <DropDownForm list={list1} />
            <InputForm type="text" nameId="firstSecurityAnswer" text="Answer first security question:" />
            <DropDownForm list={list2} />
            <InputForm type="text" nameId="secondSecurityAnswer" text="Answer second security question:" />
            <DropDownForm list={list3} />
            <InputForm type="text" nameId="thirdSecurityAnswer" text="Answer third security question:" />
            <input type="button" value={"Sing Up"} />
        </form>
    );
}

export default SingUp;
