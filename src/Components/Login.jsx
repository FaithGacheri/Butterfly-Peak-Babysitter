import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();

  // console.log(error)
  // const authentication=error.join("").includes("Invalid username or passsword")
  console.log(checkbox);
  const toastMessage = () => {
    toast.success("Login Successfull!", {
      position: toast.POSITION.TOP_CENTER,
      className: "toast-message",
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (checkbox) {
      setError([]);
      fetch("/caregiver_login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => user);
          toastMessage();
          setTimeout(() => {
            navigate("/checkbox");
          }, 1000);
        } else {
          r.json().then((err) => setError(err.error));
        }
      });
    } else {
      setError([]);
      fetch("/parent_login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => user);
          toastMessage();
          setTimeout(() => {
            navigate("/cards");
          }, 1000);
        } else {
          r.json().then((err) => setError(err.error));
        }
      });
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="h-auto flex w-4/5 m-auto flex-col justify-around py-12  overflow-hidden">
        <div className="lg:w-full sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-4xl font-bold  text-indigo-600">
            Login to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link
              to="/sign_up"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Register Here
            </Link>
          </p>
        </div>

        <div className="w-full mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="h-full w-full bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div>
                <label
                  htmlFor="username"
                  className="block text-xl font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-xl font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              {error === "Invalid username or password" ? (
                <>
                  <p className=" italic mt-0 pt-0 text-center text-red-600 flex items-center justify-center">
                    Incorrect password or username ❗
                  </p>
                </>
              ) : null}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    onChange={() => setCheckbox(true)}
                    className="h-6 w-6   rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-xl text-gray-900"
                  >
                    Caregiver? Tick here
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/login/forgot_password"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
