import React from 'react'

const varient = {
  small: "w-full px-4 py-2 rounded-lg bg-white border border-gray-300",
  medium: "w-full px-4 py-2 rounded-lg bg-white border border-gray-300",
  large: "w-full px-4 py-2 rounded-lg bg-white border border-gray-300",
}

const Select = ({ options, selectedOption, setSelectedOption, type, varientType}) => {
  return (
    <select
      value={selectedOption}
      onChange={(e) => setSelectedOption({
              type,
              payload: e.target.value,
            })}
      className={`${varient[varientType]}`}
      aria-label="Select product category"
    >
      {options.map((option) => (
        <option key={option} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select