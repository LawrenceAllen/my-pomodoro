const Input = ({
  className = "",
  type = "",
  name = "",
  value,
  placeholder = "",
  disabled = false,
  onChange = () => {},
  onKeyDown = () => {},
  maxLength = 100,
  minLength = 0,
  visibility = true,
  required = false,
  inputRef,
}) => {

  if (!visibility) {
    return null
  }
  
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
      onChange={onChange}
      onKeyDown={onKeyDown}
      required={required}
      ref={inputRef}
    />
  );
};

export default Input
