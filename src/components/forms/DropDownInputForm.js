const DropDownForm = ({ list }) => {
    return (
        <div>
            <label htmlFor={list.name}>{list.label}</label>
            <select name={list.name}>
                {list.options.map((option) => (
                    <option key={option + list.id} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default DropDownForm;
