import InputForm from "./forms/InputForm";

const ForgotPassword = () => {
    const fields = [
        {
            id: 1,
            text: "First Question?",
            type: "text",
            name: "firstQuestion"
        },
        {
            id: 2,
            text: "Second Question?",
            type: "text",
            name: "secondQuestion"
        },
        {
            id: 3,
            text: "Third Question?",
            type: "text",
            name: "thirdQuestion"
        }
    ];

    return (
        <>
            <InputForm className={"forgotPassword"} title={"Forgot Your Password?"} label={fields}/>
            <input type="button" value={"Submit"} />
        </>
    );
}

export default ForgotPassword;