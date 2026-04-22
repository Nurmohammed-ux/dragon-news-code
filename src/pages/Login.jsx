import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  // console.log(user);

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setError("");

    signIn(email, password)
      .then((result) => {
        // console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="card bg-base-100 m-auto mt-12 md:mt-30 pt-8 md:pt-16 pb-8 md:px-18 md:w-150 shrink-0 hover:shadow-2xl">
      <div className="card-body">
        <h1 className="text-2xl text-center font-bold">Login Your Account</h1>
        <div className="divider my-0 py-6" />
        <form onSubmit={handleSignIn}>
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input w-full pl-8"
              placeholder="Email"
            />
            {/* Password */}
            <div className="relative space-y-2">
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                className="input w-full pl-8"
                placeholder="Password"
              />
              <button
                onClick={(e) => {
                  (e.preventDefault(), setShowPassword(!showPassword));
                }}
                className="btn btn-xs absolute top-8.5 right-5"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            <div className="mt-3">
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="text-center mt-2">
          Dont’t Have An Account ?{" "}
          <Link
            className="text-secondary underline font-medium"
            to={"/auth/register"}
          >
            Register
          </Link>
        </p>
        {error && (
          <p className="font-medium text-secondary text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
