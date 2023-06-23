import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

function RegisterScene() {
  const navigate = useNavigate();

  const register = async (values, onSubmitProps) => {
    const savedUserResponse = await fetch(
      "http://localhost:5000/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();
    console.log(savedUser);
    navigate("/login");
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    const res = await register(values, onSubmitProps);
    return res;
  };

  return (
    <div className="min-h-screen   md:min-h-screen flex py-6 flex-col justify-center items-center bg-gradient-to-br from-blue-300 via-blue-500 to-green-300  ">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          yourId: "",
          phone: "",
          email: "",
          password: "",
          selectedOption: "Business",
          businessName: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.yourId) {
            errors.yourId = "Required";
          }
          if (!values.phone) {
            errors.phone = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          if (!values.businessName) {
            if (values.selectedOption === "Business") {
              errors.businessName = "Required";
            } else {
              values.businessName = "None";
            }
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
            className="w-9/12 md:w-auto flex flex-col gap-2 md:gap-4 rounded-xl py-5 pb-6  px-5 bg-white"
          >
            <div className="flex justify-center">
              <h1 className="text-2xl">Register</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-2 ">
              {/* FIrstName */}
              <div className="flex flex-col-reverse h-14">
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  className=" bg-light-gray bg-opacity-50 outline-none h-8  md:h-11 w-full md:w-auto    text-sm p-3 "
                />
                <div className="flex gap-3">
                  <h3 className=""> First Name</h3>

                  <h3 className="text-red-500 text-sm ">
                    {" "}
                    {errors.firstName &&
                      touched.firstName &&
                      errors.firstName}{" "}
                  </h3>
                </div>
              </div>
              {/*Last Name*/}
              <div className="flex flex-col-reverse h-14">
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  className=" bg-light-gray bg-opacity-50 outline-none h-8 md:h-11  w-full md:w-auto text-sm p-3 "
                />
                <div className="flex gap-3">
                  <h3 className="">last Name</h3>

                  <h3 className="text-red-500 text-sm ">
                    {" "}
                    {errors.lastName &&
                      touched.lastName &&
                      errors.lastName}{" "}
                  </h3>
                </div>
              </div>
            </div>

            {/*yourId  */}

            <div className="flex flex-col-reverse h-14">
              <input
                type="text"
                name="yourId"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.yourId}
                className=" bg-light-gray bg-opacity-50 outline-none  h-8 md:h-11 text-sm w-full p-3 "
              />
              <div className="flex gap-3">
                <h3 className=""> SSN</h3>

                <h3 className="text-red-500 text-sm ">
                  {" "}
                  {errors.yourId && touched.yourId && errors.yourId}{" "}
                </h3>
              </div>
            </div>
            {/*Phone */}

            <div className="flex flex-col-reverse h-14">
              <input
                type="text"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                className=" bg-light-gray bg-opacity-50 outline-none h-8 md:h-11 text-sm p-3 w-full appearance-none"
              />
              <div className="flex gap-3">
                <h3 className=""> Phone</h3>

                <h3 className="text-red-500 text-sm ">
                  {" "}
                  {errors.phone && touched.phone && errors.phone}{" "}
                </h3>
              </div>
            </div>

            {/*EMail */}

            <div className="flex flex-col-reverse h-14">
              <input
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className=" bg-light-gray bg-opacity-50 outline-none h-8 md:h-11 text-sm p-3 w-full "
              />
              <div className="flex gap-3">
                <h3 className="">Email</h3>

                <h3 className="text-red-500 text-sm ">
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
                className=" bg-light-gray bg-opacity-50 outline-none h-8 md:h-11  text-sm p-3 w-full "
              />
              <div className="flex gap-3">
                <h3>Password</h3>

                <h3 className="text-red-500 text-sm ">
                  {" "}
                  {errors.password && touched.password && errors.password}
                </h3>
              </div>
            </div>
            {/*DropDown */}
            <div>
              <Field
                as="select"
                name="selectedOption"
                value={values.selectedOption}
                className="bg-light-gray bg-opacity-50 outline-none mt-1 md:mt-0   py-1 px-2 md:p-2"
              >
                <option value="Business">Business</option>
                <option value="Personal">Personal</option>
              </Field>
              {values.selectedOption === "Business" ? (
                <div className="flex flex-col-reverse h-14 mt-2 md:mt-4 transition-all duration-300">
                  <input
                    type="text"
                    name="businessName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.businessName}
                    className=" bg-light-gray bg-opacity-50 outline-none h-8 md:h-11  text-sm p-3  w-full "
                  />
                  <div className="flex gap-3">
                    <h3 className=""> Business Name</h3>

                    <h3 className="text-red-500 text-sm ">
                      {errors.businessName &&
                        touched.businessName &&
                        errors.businessName}
                    </h3>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="w-full flex justify-center flex-col">
              <button
                type="submit"
                className="w-full h-9 md:h-11 bg-cyan-500 rounded-sm text-white "
                disabled={isSubmitting}
              >
                Register
              </button>
              <Link to="/login">
                <h2 className="text-sm pt-2 underline">
                  Already have an Account?Login Here.
                </h2>
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterScene;
