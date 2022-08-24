import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

export const LoginComponent = () => {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = (e) => {
    e.preventDefault()
    var setEmail;
    var setpwd;
    setEmail = localStorage.getItem("email");
    setpwd = localStorage.getItem("pwd");
    let flag = true;
    let email = formValues.email;
    email = email.trim();
    let password = formValues.password;
    if (!email && !password) {
      toast("Email and password required", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        transition: null,
      });
      return false;
    } else if (email.trim().length < 1) {
      setEmailError(true);
      flag = false;
    }
    if (password.length < 1) {
      setPasswordError(true);
      flag = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(true);
      flag = false;
    }

    if (flag) {
      if (email === setEmail && password === setpwd) {
        navigate("/landing");
      } else {
        toast("Email or Password in incorrect", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          transition: null,
        });
      }
      return true;
    }
    return false;
  };

  return (
    <div>
      <div className=" main d-block">
        <div className="blue-main-gradient py-5">
          <div className="container">
            <div className="row">
              <div className="card">
                <div className="container my-5">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-12 d-flex justify-content-center">
                      <h1>WELCOME</h1>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-6 px-md-5 c-border-right ">
                      <div className="row">
                        <div className="col-12">
                          <h2>LOGIN</h2>
                        </div>
                        <div className="col-12 ">
                          <div className="">
                            <form>
                              <TextField
                                className="w-100 mt-2"
                                label="Enter your email*"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                                error={emailError}
                                helperText={
                                  emailError &&
                                  "Please enter valid email"
                                }
                              />
                              <TextField
                                className="w-100 mt-4"
                                label="Password*"
                                name="password"
                                value={formValues.password}
                                onChange={handleInputChange}
                                type="password"
                                error={passwordError}
                                helperText={
                                  passwordError && "Password must be 8 characters atleast"
                                }
                              />
                              <button
                                type="submit"
                                className="w-100 my-5 blue-main-gradient border-button-blue
                                                height-40 border-radius-20 fw-bold fs-16 text-uppercase l-spacing-2-0 "
                                onClick={validateForm}
                              >
                                Login
                              </button>
                            </form>
                            <div className="d-flex justify-content-center">
                              <a href="/forgot-password">
                                <small className="text-decoration-none align-content-center text-center fw-bold fc-light-black cursor-pointer l-spacing-2-0">
                                  Forgot password?
                                </small>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 px-md-5">
                      <div className="row">
                        <div className=" ">
                          <h2>New User?</h2>
                        </div>
                        <div className="mt-3">
                          <h3>Create an account</h3>
                        </div>
                        <small className="fc-light-black mt-2">
                          By creating an account, you get access to early deals,
                          offers, and various coupon codes to use on the website
                        </small>
                        <div className="">
                          <a href="/register">
                            <button
                              type="submit"
                              className="w-100 my-3 blue-main-gradient border-button-blue
                                                    height-40 border-radius-20 fw-bold fs-16 text-uppercase l-spacing-2-0 "
                            >
                              Register
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        autoClose={10}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <ToastContainer />
    </div>
  );
};
