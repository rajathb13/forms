import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

export const Landingpage = () => {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleSubmit() {
    navigate("/")
    localStorage.clear()
  }

  return (
    <div className="main">
      <div className="blue-main-gradient py-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="card col-sm-12 col-md-10 col-lg-6 ">
              <div className="d-flex justify-content-center mt-5">
                <h1>Welcome</h1>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <h2>Login Successful</h2>
              </div>
              <hr />
              <br />
              <div className="justify-content-center">
                <button
                  type="submit"
                  className="w-100 my-3 blue-main-gradient border-button-blue height-40 border-radius-20 fw-bold text-uppercase l-spacing-2-0 my-5 .w-100 cursor-pointer"
                  onClick={handleSubmit}
                >Logout
                </button>
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