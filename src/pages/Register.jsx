import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200 px-4 py-12">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Create Account 📝
        </h2>

        <Form method="post" className="space-y-5">
          <FormInput type="text" label="Username" name="username" />
          <FormInput type="email" label="Email" name="email" />
          <FormInput type="password" label="Password" name="password" />

          <SubmitBtn text="Register" />
        </Form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 hover:underline font-medium"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
