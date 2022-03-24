

const Input = ({ 
    className = "",
    type = "",
    name = "",
    value,
    placeholder = "",
    disabled = false,
    onChange = () => {},
    focus = false,
    maxLength = 100,
    minLength = 0,
    visibility,
}) => {

    return (
        <input type={type} />
    )


}

export default Input;