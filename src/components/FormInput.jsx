import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
const FormInput = ({ label, name, type, defaultValue }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={isPassword && isVisible ? "text" : type}
        name={name}
        id={name}
        defaultValue={defaultValue}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {isVisible ? <EyeOff size={17} /> : <Eye size={17} />}
        </button>
      )}
    </div>
  );
};

export default FormInput;
