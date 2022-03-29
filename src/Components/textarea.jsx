const TextArea = ({
  className = "",
  name = "",
  content,
  cols,
  rows,
  placeholder = "",
  disabled = false,
  onChange = () => {},
}) => {
  return (
    <textarea
      className={`${className} rounded-md border border-slate-400 border-2 resize-none overflow-y-auto p-1 focus:outline-none`}
      name={name}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    >
    {content} 
    </textarea>
  );
};

export default TextArea
