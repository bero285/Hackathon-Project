import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

function LoginScene() {
  const navigate = useNavigate();
  const login = async (values, onSubmitProps) => {
    console.log(values);
    const loggedInResponse = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    console.log(loggedIn);

    // if (loggedIn) {

    navigate("/home");
    // }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    const res = await login(values, onSubmitProps);
    return res;
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 via-blue-500 to-green-300   ">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }

          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid Email address";
          }
          if (values.password.length < 8) {
            errors.password = "Min 8 letters";
          }
          return errors;
        }}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-2 w-9/12 md:w-96 bg-white p-5 rounded-xl"
          >
            <div className="flex justify-center">
              <h1 className="text-2xl">Sing In</h1>
            </div>

            {/*EMail */}

            <div className="flex flex-col-reverse h-14">
              <input
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className=" bg-light-gray outline-none h-11  text-sm p-3 bg-opacity-50 w-full"
              />
              <div className="flex gap-3">
                <h3 className=""> Email</h3>

                <h3 className="text-red-500 text-xm ">
                  {" "}
                  {errors.email && touched.email && errors.email}
                </h3>
              </div>
            </div>

            {/*password */}

            <div className="flex flex-col-reverse h-14">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className=" bg-light-gray outline-none h-11 bg-opacity-60 text-sm p-3 w-full"
              />
              <div className="flex gap-3">
                <h3 className=""> Password</h3>

                <h3 className="text-red-500 text-xm ">
                  {" "}
                  {errors.password && touched.password && errors.password}
                </h3>
              </div>
            </div>

            <div className="w-full flex justify-center flex-col">
              <button
                type="submit"
                className="w-full h-10 bg-cyan-500 rounded-sm text-white "
                disabled={isSubmitting}
              >
                Login
              </button>
              <Link to="/register">
                <h2 className="text-sm pt-2 underline">
                  Don't have an Account?Register Here.
                </h2>
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default LoginScene;
