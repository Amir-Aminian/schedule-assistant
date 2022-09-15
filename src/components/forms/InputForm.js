import { forwardRef } from "react";

const InputForm = ({ type, nameId, text }, ref) => {

    return (
        <div>
            <label htmlFor={nameId}>{text}</label>
            <input type={type} ref={ref} name={nameId} id={nameId} />
        </div>
    )
}

export default forwardRef(InputForm);
