const Text = ({ 
    className = "", 
    value = "",
		onClick = () => {},
}) => {
  return (
		<span 
			className={className}
			onClick={onClick}
		>
		{value}
		</span>
  )
}

export default Text
