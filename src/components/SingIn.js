import InputForm from "./forms/InputForm";


const SingIn = () => {
    return (
        <form className="singIn">
            <h2>Sing In</h2>
            <InputForm type="text" nameId="username" text="Username:" />
            <InputForm type="text" nameId="password" text="Password:" />
            <input type="button" value={"Sing In"} />
        </form>
    );
}

export default SingIn;
