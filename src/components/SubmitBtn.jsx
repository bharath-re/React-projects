import React from "react";

function SubmitBtn({ text = "Submit" }) {
  return (
    <button
      type="submit"
      className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 ease-in-out"
    >
      {text}
    </button>
  );
}

export default SubmitBtn;
