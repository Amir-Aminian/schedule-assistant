const InputForm = ({ type, nameId, text }) => {
    return (
        <form className={nameId}>
            <label>{text}</label>
            <input type={type} name={nameId} id={nameId} />
        </form>
    )
}

export default InputForm;
