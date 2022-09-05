const InputForm = ({ className, title, label }) => {
    return (
        <div className={className}>
            <h3>{title}</h3>
            <form>
                {label.map((field) => (
                    <div key={field.id}>
                        <label>{field.text}</label>
                        <input type={field.type} name={field.name} id={field.name} />
                        <br />
                    </div>
                ))}
            </form>
        </div>
    )
}

export default InputForm;
