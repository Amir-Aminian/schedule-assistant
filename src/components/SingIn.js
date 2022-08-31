const SingIn = () => {
    return (
        <div className="singIn">
            <h3>Sing In</h3>
            <form action="">
                <label htmlFor="userName">User Name:</label>
                <input type="text" name="userName" id="userName" /><br />
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" id="password" /><br />
            </form>
            <input type="button" value={"Sing In"} />
        </div>
    );
}

export default SingIn;