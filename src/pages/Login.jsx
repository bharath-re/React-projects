import { Link } from "react-router-dom";
import { SubmitBtn, FormInput } from "../components";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4 py-12">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Welcome Back 👋
        </h2>

        <form className="space-y-5">
          <FormInput
            type="email"
            name="email"
            label="Email"
            defaultValue="test@gmail.com"
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            defaultValue="secret"
          />

          <SubmitBtn text="Login" />

          <button
            type="button"
            className="w-full mt-2 px-6 py-3 border border-blue-500 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition duration-300"
          >
            Continue as Guest
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Not a user?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
