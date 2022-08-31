const SingUp = () => {
    return (
        <div className="singUp">
            <h3>Sing Up</h3>
            <form action="">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" /><br />
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" /><br />
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" id="password" /><br />
                <label htmlFor="cPassword">Confirm Password:</label>
                <input type="text" name="cPassword" id="cPassword" /><br />
            </form>
            <input type="button" value={"Sing Up"} />
            <a href="">Already have an account? Sing In</a>
        </div>
    );
}

export default SingUp;