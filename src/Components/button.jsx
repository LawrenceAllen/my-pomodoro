const Button = ({
  className = "",
  value = "",
  type = "",
  onClick = () => {},
}) => {
  return (
    <button
      className={`${className} w-full p-1 bg-white font-medium`}
      type={type}
      onClick={onClick}
    >
    {value}
    </button>
  );
};

export default Button;
