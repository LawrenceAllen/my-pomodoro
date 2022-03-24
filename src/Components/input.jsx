const Input = ({
  className = "",
  type = "",
  name = "",
  value,
  placeholder = "",
  disabled = false,
  onChange = () => {},
  maxLength = 100,
  minLength = 0,
}) => {
  return (
    <input
      className={`${className} h-full w-full rounded-md border border-slate-400 border-2 p-1`}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      disabled={disabled}
      maxLength={maxLength}
      minLength={minLength}
    />
  );
};

export default Input;
