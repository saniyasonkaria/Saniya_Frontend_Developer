import React from 'react'

const Input = (props) => {
  return (
    <div className="p-2">
    {" "}
    <label htmlFor={props.label}  className="block text-md font-medium text-white pb-1">
   {props.label}
</label>
    <input  
      onChange={props.onChange}
      type="search"
      name={props.name}
      id={props.label}
      value={props.value}
      className="block w-full rounded-sm border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 text-lg h-12 py-4"
      placeholder={props.label}
    />
  </div>
  )
}

export default Input
