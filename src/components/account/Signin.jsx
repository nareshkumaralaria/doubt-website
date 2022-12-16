import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <>
            <div className="account-section">
                <div className="acoount-row row">
                    <div className="col-md-6">
                        <div className="account-col">
                            <div className="brand-logo d-md-none">
                                <img src={process.env.PUBLIC_URL + "/assets/icons/app-logo-v2.svg"} alt="" />
                                <p>DouBT</p>
                            </div>
                            <form action="">
                                <div className="form-title">
                                    <p>Welcome back</p>
                                    <span>Welcome back, Please enter your details</span>
                                </div>
                                <div className="form-inputs">
                                    <label>Email</label>
                                    <input type="email" placeholder='Enter your email' />
                                    <span></span>
                                </div>
                                <div className="form-inputs">
                                    <label>Password</label>
                                    <input type="password" placeholder='•••••••••••' />
                                    <span></span>
                                </div>
                                <div className="account-forgot">
                                    <Link to="">Forgot Password?</Link>
                                </div>
                                <div className="form-submit-div">
                                    <button type="submit">Sign in</button>
                                </div>
                            </form>
                            <div className="account-redirect">
                                <p>Don’t have account? <Link to="/signup">Sign up here</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="account-right-col col-md-6 d-none d-md-block">
                        <div className="account-image-banner">
                            <p>“The super way to solve your doubts”<br />Join us </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;