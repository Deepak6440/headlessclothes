import React, { useState } from 'react';
import Google from "../../../assets/img/google.png";
import { useDispatch, useSelector } from 'react-redux';
import { customerLogin } from '../../../utlis/api';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, user } = useSelector((state) => state.order);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(customerLogin({ username, password }))
            .then((response) => {
                if (response.payload.token) {
                    // Navigate to dashboard if login is successful
                    navigate('/dashboard');
                } else {
                    // Handle login failure (e.g., show error message)
                    alert("Login failed. Please check your credentials.");
                }
            });
    };

    return (
        <>
            <section className="login-area pt-100 pb-100">
                <div className="container">
                    <div className="login-wrap text-center">
                        <h3 className="title">Login Into Your Account</h3>
                        <a href="#" className="google-login">
                            <img src={Google} alt="google" />Login with Google
                        </a>
                        <span className="or-text">OR</span>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <form onSubmit={handleLogin} className="login-form">
                            <div className="form-item">
                                <h4 className="form-header">Username or email address</h4>
                                <input
                                    type="text"
                                    id="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="Please enter the username/email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-item">
                                <h4 className="form-header">Password*</h4>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Please enter the password"
                                />
                            </div>
                            <div className="form-item">
                                <div className="checkbox-wrap">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label htmlFor="vehicle1"> Remember me</label><br />
                                </div>
                            </div>
                            <div className="submit-btn">
                                <button className="rr-primary-btn" type="submit" disabled={loading}>
                                    {loading ? 'Logging in...' : 'Login'}
                                </button>
                            </div>
                            <a href="#" className="forgot">Lost your password?</a>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginForm;
