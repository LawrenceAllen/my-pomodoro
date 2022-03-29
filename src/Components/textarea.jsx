const TextArea = ({
  className = "",
  name = "",
  defaultValue,
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
      defaultValue={defaultValue}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    >
    </textarea>
  )
}

export default TextArea
