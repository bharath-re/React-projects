import React from "react";

function FormInput({ label, type = "text", name, defaultValue }) {
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
      />
    </div>
  );
}

export default FormInput;
