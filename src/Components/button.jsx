const Button = ({
  className = "",
  value = "",
  type = "",
  visibility = true,
  onClick = () => {},
}) => {
  
  if (!visibility) {
    return null
  }

  return (
    <button
      className={`${className} w-full p-1 bg-white font-medium`}
      type={type}
      onClick={onClick}
    >
    {value}
    </button>
  )
}

export default Button
