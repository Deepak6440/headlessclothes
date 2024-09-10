import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../../../utlis/api";
import { useNavigate } from "react-router-dom";
import Google from "../../../assets/img/google.png";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, customer } = useSelector((state) => state.customer);

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate the form before dispatching the action
    if (!validateForm()) {
      return;
    }

    try {
      const resultAction = await dispatch(createCustomer({
        email,
        username: name,
        password,
      }));

      if (resultAction.payload) {
        toast.success("Account created successfully!");
        navigate("/");  // Redirect to the homepage
      } else {
        toast.error(resultAction.payload || "Error creating account");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <>
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="login-wrap text-center">
            <h3 className="title">Create Your Account</h3>
            <a href="#" className="google-login">
              <img src={Google} alt="google" />Login with Google
            </a>
            <span className="or-text">OR</span>
            <form onSubmit={handleRegister} className="login-form">
              <div className="form-item">
                <h4 className="form-header">Your Name*</h4>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="form-control" 
                  placeholder="Your Name"
                  required
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
              </div>
              <div className="form-item">
                <h4 className="form-header">Email Address*</h4>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="form-control" 
                  placeholder="Email Address" 
                  required
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
              </div>
              <div className="form-item">
                <h4 className="form-header">Password*</h4>
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="form-control" 
                  placeholder="Password" 
                  minLength="6"
                  required
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
              </div>
              <div className="submit-btn">
                <button type="submit" className="rr-primary-btn">
                  {loading ? "Creating Account..." : "Register Account"}
                </button>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div className="login-btn-wrap">
                <a href="#" className="forgot">Already have an account?</a>
                <Link to="/login" className="log-in">Log in</Link>
              </div>
            </form>
          </div>
        </div>
        {/* Include ToastContainer for displaying toast notifications */}
        <ToastContainer />
      </section>
    </>
  );
};

export default RegisterForm;
