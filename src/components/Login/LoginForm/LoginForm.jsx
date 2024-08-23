import React from 'react'

const LoginForm = () => {
  return (
   <>
    <section className="login-area pt-100 pb-100">
            <div className="container">
                <div className="login-wrap text-center">
                    <h3 className="title">Login Into Your Account</h3>
                    <a href="#" className="google-login"><img src="assets/img/icon/google.png" alt="google"/>Login with Google</a>
                    <span className="or-text">OR</span>
                    <form action="mail.php" className="login-form">
                        <div className="form-item">
                            <h4 className="form-header">Username or email address</h4>
                            <input type="text" id="text" name="text" className="form-control" placeholder=""/>
                        </div>
                        <div className="form-item">
                            <h4 className="form-header">Password*</h4>
                            <input type="text" id="text-2" name="text-2" className="form-control" placeholder=""/>
                        </div>
                        <div className="form-item">
                            <div className="checkbox-wrap">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1"> Remember me</label><br/>
                            </div>
                        </div>
                        <div className="submit-btn">
                            <button className="rr-primary-btn">Login Account</button>
                        </div>
                        <a href="#" className="forgot">Lost your password?</a>
                    </form>
                </div>
            </div>
        </section>
   </>
  )
}

export default LoginForm