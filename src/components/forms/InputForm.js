const InputForm = ({ type, nameId, text }) => {
    return (
        <>
            <label>{text}</label>
            <input type={type} name={nameId} id={nameId} />
            <br />
        </>
    )
}

export default InputForm;
