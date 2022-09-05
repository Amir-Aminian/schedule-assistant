import InputForm from "./forms/InputForm";

const SingUp = () => {
    const fields = [
        {
            id: 1,
            text: "Username:",
            type: "text",
            name: "username"
        },
        {
            id: 2,
            text: "Email Address:",
            type: "text",
            name: "email"
        },
        {
            id: 3,
            text: "Password:",
            type: "text",
            name: "password"
        },
        {
            id: 4,
            text: "Confirm Password:",
            type: "text",
            name: "confirmPassword"
        }
    ];

    return (
        <>
            <InputForm className={"singUp"} title={"Sing Up"} label={fields}/>
            <input type="button" value={"Sing Up"} />
        </>
    );
}

export default SingUp;
