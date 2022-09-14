const InputForm = ({ type, nameId, text }) => {
    return (
        <div>
            <label htmlFor={nameId}>{text}</label>
            <input type={type} name={nameId} id={nameId} />
        </div>
    )
}

export default InputForm;
