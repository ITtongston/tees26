"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  children,
  value,
  onChange,
  error,
  isCompleted,
  className = "",
  ...props
}) => {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
        {isCompleted && <FontAwesomeIcon icon={faCheckCircle} className="ml-2 text-green-500" />}
      </label>
      {children || (
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
            error
              ? "border-red-500 bg-red-50"
              : isCompleted
                ? "border-green-500 bg-green-50"
                : "border-gray-300 focus:border-yellow-500"
          } ${className}`}
          {...props}
        />
      )}
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  )
}

export default InputField
