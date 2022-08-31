const ForgotPassword = () => {
    return (
        <div className="forgotPassword">
            <h3>Forgot Your Password?</h3>
            <p>Answer these three security qustions:</p>
            <form action="">
                <label htmlFor="firstQ">First question?</label>
                <input type="text" name="firstA" id="firstA" /><br />
                <label htmlFor="secondQ">Second question?</label>
                <input type="text" name="secondA" id="secondA" /><br />
                <label htmlFor="thirdQ">Third question?</label>
                <input type="text" name="thirdA" id="thirdA" /><br />
            </form>
            <input type="button" value={"Submit"} />
        </div>
    );
}

export default ForgotPassword;