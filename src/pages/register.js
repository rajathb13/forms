import React, {useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./login.css"
import validateForm from "./login"

export const RegistrationComponent = () => {
    let navigate = useNavigate();
    const [formValues, setFormValues] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [firstNameError,setFirstNameError] = React.useState(false);
    const [lastNameError,setLastNameError] = React.useState(false);
    const [emailError,setEmailError] = React.useState(false);
    const [passwordError,setPasswordError] = React.useState(false);
    const [confirmPasswordError,setConfirmPasswordError] = React.useState(false);
    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };
    const validateFormSchema = () => {
        let flag = true;
        let fName = formValues.firstName;
        let lName = formValues.lastName;
        let email = formValues.email;
        let password = formValues.password;
        let confirmPassword = formValues.confirmPassword;


        fName = fName.trim();
        lName = lName.trim();
        email = email.trim();


        if(fName.trim().length < 1 && lName.trim().length < 1 && email.trim().length < 1 && password.length < 8){
            toast('All fields must be filled', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                transition: null,
            });
            return false;
        }
        else if(fName.trim().length < 0 ){
            console.log("LINE $)")
            toast('Please enter first name', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                transition: null,
            });
            return false;
        }
        else if(lName.trim().length < 0 ){
            console.log("LINE $)")
            toast('Please fill out last name', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                transition: null,
            });
            return false;
        }
        else if(email.trim().length < 0){
            console.log("LINE $)")
            toast('Please enter valid email', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                transition: null,
            });
            return false;
        }
        else if(password.length < 8){
            console.log("LINE $)")
            toast('Please fill out password', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                transition: null,
            });
            return false;
        }
        
        if(!(/^[a-zA-Z]+$/.test(fName))){
            setFirstNameError(true);
            flag = false;

        }        
        if(!(/^[a-zA-Z]+$/.test(lName))){
            setLastNameError(true);
            flag = false;

        }
        if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))){ 
            setEmailError(true);
            flag = false;

        }
        
        //https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters
        if(!(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,26}$/.test(password))){
            
            setPasswordError(true);
            flag = false;

        }
        if(!(password === confirmPassword)){
            setConfirmPasswordError(true);
            flag = false;

        }

        if(flag){
            return true;
        }else{
            return false
        }

    }

    const handleSubmit = React.useCallback( (e) => {
        e.preventDefault();
        let returnVariable  = validateFormSchema(formValues);
        if(returnVariable){
            localStorage.setItem('FirstName', formValues.firstName);
            localStorage.setItem('LastName', formValues.lastName);
            localStorage.setItem('email', formValues.email);
            localStorage.setItem('pwd', formValues.password)            
            navigate("/")        
        }
        
    },[formValues])
    return (
        <div className="main">
            <div className="blue-main-gradient py-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                    <div className="card col-sm-12 col-md-10 col-lg-6 ">
                        <div className="d-flex justify-content-center mt-5">
                            <h1>Create an account</h1>
                        </div>
                        <div className="d-flex justify-content-center">
                            <small className="fc-light-black">Have an account? <a href="/" className="fw-bold cursor-pointer text-black text-decoration-underline">Login</a></small>
                        </div>
                        <div className="d-flex justify-content-center">
                            <form onSubmit={handleSubmit}>
                                <div className="row mt-4">
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Enter your first name*"
                                            className="w-100 "
                                            margin="normal"
                                            name="firstName"
                                            value={formValues.firstName}
                                            onChange={handleInputChange}
                                            error={firstNameError}
                                            helperText={firstNameError && "First Name only accepts letters"}
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextField
                                            label="Enter your last name*"
                                            className="w-100 "
                                            margin="normal"
                                            name="lastName"
                                            value={formValues.lastName}
                                            onChange={handleInputChange}
                                            error={lastNameError}
                                            helperText={lastNameError && "Last Name only accepts letters"}
                                        />
                                    </div>
                                </div>
                                <br/>
                                <div>
                                    <TextField
                                        className="w-100 mt-1"
                                        label="Enter your email*"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleInputChange}
                                        error={emailError}
                                        helperText={emailError && "Please enter in correct email format"}
                                    />
                                </div>
                                <br/>
                                <div>
                                    <TextField
                                        className="w-100"
                                        label="Password*"
                                        name="password"
                                        value={formValues.password}
                                        onChange={handleInputChange}
                                        type="password"
                                        error={passwordError}
                                        helperText={passwordError && "Password should be at least 8 characters"}
                                    />
                                </div>
                                <br/>
                                <div>
                                    <TextField
                                        className="w-100 mt-1"
                                        label="Confirm Password*"
                                        name="confirmPassword"
                                        value={formValues.confirmPassword}
                                        onChange={handleInputChange}
                                        type="password"
                                        error={confirmPasswordError}
                                        helperText={confirmPasswordError && "Password and confirm password should match"}
                                    />
                                </div>
                                <button type="submit"
                                        className="w-100 my-3 blue-main-gradient border-button-blue
                                                    height-40 border-radius-20 fw-bold fs-16 text-uppercase l-spacing-2-0 my-5 cursor-pointer"
                                        onClick={handleSubmit}>Submit</button>
                            </form>
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
}