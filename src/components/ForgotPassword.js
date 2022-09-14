import InputForm from "./forms/InputForm";

const ForgotPassword = () => {
    return (
        <form className="forgotPassword">
            <h2>Forgot Your Password?</h2>
            <InputForm type="text" nameId="firsQuestion" text="First Question?" />
            <InputForm type="text" nameId="secondQuestion" text="Second Question?" />
            <InputForm type="text" nameId="thirdQuestion" text="Third Question?" />
            <input type="button" value={"Submit"} />
        </form>
    );
}

export default ForgotPassword;