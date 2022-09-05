import InputForm from "./forms/InputForm";


const SingIn = () => {
    const fields = [
        {
            id: 1,
            text: "Username:",
            type: "text",
            name: "username"
        },
        {
            id: 2,
            text: "Password:",
            type: "text",
            name: "password"
        }
    ];

    return (
        <>
            <InputForm className={"singIn"} title={"Sing In"} label={fields} />
            <input type="button" value={"Sing In"} />
        </>
    );
}

export default SingIn;
