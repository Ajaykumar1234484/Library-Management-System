export function Button({ children, onClick, variant = "default", className = "", type = "button", ...props }) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none"

  const variants = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-gray-300 hover:bg-gray-100 text-gray-700",
    ghost: "hover:bg-gray-100 text-gray-700",
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}