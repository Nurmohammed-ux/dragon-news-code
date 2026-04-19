import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;
    console.log(name, photo, email, password, terms);

    setError("");

    if (!terms) {
      alert("Please, accept our terms and conditions");
      return;
    }

    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="card bg-base-100 m-auto mt-12 md:mt-24 pt-8 md:pt-16 pb-8 md:px-18 md:w-150 shrink-0 hover:shadow-2xl">
      <div className="card-body">
        <h1 className="text-2xl text-center font-bold">
          Register Your Account
        </h1>
        <div className="divider my-0 py-6" />
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full pl-8"
              placeholder="Enter your name"
            />
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              required
              className="input w-full pl-8"
              placeholder="Enter your photoURL"
            />
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
            <label className="flex items-center mt-3 text-[14px] gap-4">
              <input type="checkbox" name="terms" className="checkbox" />
              Accept Term & Conditions
            </label>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
        </form>
        <p className="text-center mt-2">
          Already Have An Account ?{" "}
          <Link
            className="text-secondary font-medium underline"
            to={"/auth/login"}
          >
            Login
          </Link>
        </p>
        {error && (
          <p className="font-medium text-secondary text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
