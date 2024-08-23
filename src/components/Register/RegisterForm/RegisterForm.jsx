import React from 'react'

const RegisterForm = () => {
  return (
    <>
    <section className="login-area pt-100 pb-100">
            <div className="container">
                <div className="login-wrap text-center">
                    <h3 className="title">Create Your Account</h3>
                    <a href="#" className="google-login"><img src="assets/img/icon/google.png" alt="google"/>Login with Google</a>
                    <span className="or-text">OR</span>
                    <form action="mail.php" className="login-form">
                        <div className="form-item">
                            <h4 className="form-header">Your Name*</h4>
                            <input type="text" id="name" name="name" className="form-control" placeholder=""/>
                        </div>
                        <div className="form-item">
                            <h4 className="form-header">Email Address*</h4>
                            <input type="text" id="email" name="email" className="form-control" placeholder=""/>
                        </div>
                        <div className="form-item">
                            <h4 className="form-header">Password*</h4>
                            <input type="text" id="text-2" name="text-2" className="form-control" placeholder=""/>
                        </div>
                        <div className="form-item">
                            <div className="checkbox-wrap mb-10">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1"> Subscribe to stay updated with new products and offers!</label><br/>
                            </div>
                            <div className="checkbox-wrap">
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Bike"/>
                                <label for="vehicle2"> I accept the  <span>Terms / Privacy Policy</span></label><br/>
                            </div>
                        </div>
                        <div className="submit-btn">
                            <button className="rr-primary-btn">Register Account</button>
                        </div>
                        <div className="login-btn-wrap">
                            <a href="#" className="forgot">Already have an account?</a>
                            <a className="log-in" href="login.html">Log in</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default RegisterForm