import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
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
                                    <p>let's Connect</p>
                                    <span>Fill the below form to signup</span>
                                </div>
                                <div className="form-inputs">
                                    <label>Username</label>
                                    <input type="text" placeholder='Enter a unique username' />
                                    <span></span>
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
                                <div className="form-submit-div">
                                    <button type="submit">Sign up</button>
                                </div>
                            </form>
                            <div className="account-redirect">
                                <p>Already have an account? <Link to="/signin">Sign in here</Link></p>
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

export default Signup;