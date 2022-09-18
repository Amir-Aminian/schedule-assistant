const DropDownForm = ({ id, name, label, options }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select name={name}>
                {options.map((option) => (
                    <option key={option + id} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default DropDownForm;
