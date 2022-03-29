const Text = ({ 
    className = "", 
    value = "" 
}) => {
  return (
		<span 
			className={className}
		>
		{value}
		</span>
  )
};

export default Text
