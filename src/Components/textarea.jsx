const TextArea = ({
  className = "",
  name = "",
  value,
  cols,
  rows,
  placeholder = "",
  disabled = false,
  onChange = () => {},
}) => {
  return (
    <textarea
      className={`${className} h-full w-full rounded-md border border-slate-400 border-2 resize-none overflow-y-auto p-1 focus:outline-none`}
      name={name}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      value={value}
    ></textarea>
  );
};

export default TextArea
