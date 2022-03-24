

const Text = ({ 
    className = "",
    value = "",
    placeholder= ""
}) => {

    return (
        <span 
            className={className} 
            placeholder={placeholder}
        >
        {value}
        </span>
    )
}

export default Text;