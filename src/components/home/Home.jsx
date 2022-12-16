import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>

            {/* header - start */}
            <div className="header position-absolute">
                <div className="header-container container d-flex justify-content-between align-items-center">
                    <div className="logo-div d-flex align-items-center ">
                        <Link to="/">
                            <img className='me-3' src={process.env.PUBLIC_URL + "/assets/icons/app-logo.svg"} alt="" />
                        </Link>
                        <Link to='/' className='mb-0'>DouBT</Link>
                    </div>
                    <div className="buttons">
                        <Link to="/signin">Sign in</Link>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
            {/* header - end */}

            {/* home */}
            <div className="home">
                <div className="home-container container">
                    <div className="hero-title">
                        <p className='text-center'>The super way to solve your doubts</p>
                        <p className='text-center'>Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum</p>
                    </div>

                    <div className="showcase d-flex justify-content-evenly align-items-center">
                        <img src={process.env.PUBLIC_URL + "/assets/images/Question-mockup.svg"} alt="" />
                        <img src={process.env.PUBLIC_URL + "/assets/images/Upload-Photo-Mockup.svg"} alt="" />
                        <img src={process.env.PUBLIC_URL + "/assets/images/Success-mockup.svg"} alt="" />
                    </div>

                    <div className="stores-buttons text-center">
                        <a href="##"><img src={process.env.PUBLIC_URL + "/assets/images/app-store.svg"} alt="" /></a>
                        <a href="##"><img src={process.env.PUBLIC_URL + "/assets/images/play-store.png"} alt="" /></a>
                    </div>

                    <div className="how-it-works">
                        <p className='text-center'>How it works!</p>
                        <p className='text-center'>Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum</p>
                    </div>

                    {/* row 1 */}
                    <div className="how-it-works-row row">
                        <div className="step col-sm-6 position-relative">
                            <img src={process.env.PUBLIC_URL + "/assets/images/step-1.svg"} alt="" />
                            <img className='position-absolute' src={process.env.PUBLIC_URL + "/assets/images/Upload-Photo-Mockup.svg"} alt="" />
                        </div>

                        <div className="step-para col-sm-6">
                            <p>Easy to use easy to use</p>
                            <p>Solve your doubt within an hours lorem ipsum lorem ipsum lore ispsum Solve your doubt within an hourslorem ipsum lorem ipsum lorem ispsum</p>
                            <p>Solve your doubt within an hours lorem ipsum lorem ipsum lore ispsum Solve your doubt</p>
                            <a href='##'>Sign up now</a>
                        </div>
                    </div>

                    {/* row 2 */}
                    <div className="how-it-works-row row">
                        <div className="step-para col-sm-6 order-sm-0 order-1">
                            <p>Easy to use easy to use</p>
                            <p>Solve your doubt within an hours lorem ipsum lorem ipsum lore ispsum Solve your doubt within an hourslorem ipsum lorem ipsum lorem ispsum</p>
                            <p>Solve your doubt within an hours lorem ipsum lorem ipsum lore ispsum Solve your doubt</p>
                            <a href='##'>Download app now</a>
                        </div>

                        <div className="step col-sm-6 position-relative order-sm-1 order-0">
                            <img src={process.env.PUBLIC_URL + "/assets/images/step-2.svg"} alt="" />
                            <img className='position-absolute' src={process.env.PUBLIC_URL + "/assets/images/Upload-Photo-Mockup.svg"} alt="" />
                        </div>
                    </div>

                    {/* row 3 */}
                    <div className="how-it-works-row row">
                        <div className="step col-sm-6 position-relative">
                            <img src={process.env.PUBLIC_URL + "/assets/images/step-3.svg"} alt="" />
                            <img className='position-absolute' src={process.env.PUBLIC_URL + "/assets/images/Upload-Photo-Mockup.svg"} alt="" />
                        </div>

                        <div className="step-para col-sm-6">
                            <p>Easy to use easy to use</p>
                            <p>Solve your doubt within an hours lorem ipsum lorem ipsum lore ispsum Solve your doubt within an hourslorem ipsum lorem ipsum lorem ispsum</p>
                            <p>Solve your doubt within an hours lorem ipsum lorem ipsum lore ispsum Solve your doubt</p>
                            <a href='##'>Rate on us</a>
                        </div>
                    </div>

                    <div className="statistics">
                        <div className="statistics-row row">
                            <div id="statistics-col-1" className="statistics-col statistics-col-border col-sm-3 col-6">
                                <i className="ri-registered-fill"></i>
                                <p>2000+</p>
                                <span>Registered students</span>
                            </div>
                            <div id="statistics-col-2" className="statistics-col statistics-col-border col-sm-3 col-6">
                                <i className="ri-user-3-fill"></i>
                                <p>1500</p>
                                <span>Active students</span>
                            </div>
                            <div id="statistics-col-3" className="statistics-col statistics-col-border col-sm-3 col-6">
                                <i className="ri-checkbox-circle-fill"></i>
                                <p>1M+</p>
                                <span>Doubt solved</span>
                            </div>
                            <div id="statistics-col-4" className="statistics-col col-sm-3 col-6">
                                <i className="ri-user-2-fill"></i>
                                <p>150</p>
                                <span>Active teachers</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonials">
                        <p className='text-center'>Testimonials</p>
                        <p className='text-center'>Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum</p>
                    </div>

                    <div className="testimonials-row row">
                        <div className="testimonials-col col-sm-6">
                            <div className="testimonials-inner-col">
                                <p className="testimonials-review">Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum m Solve your doubt within an hours lorem i</p>
                                <div className="testimonials-user-details">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/profile_user.jpg"} alt="" />
                                    <div>
                                        <p className="testimonials-user-name">User Name</p>
                                        <p className="testimonials-user-class">Class name, city</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials-col col-sm-6">
                            <div className="testimonials-inner-col">
                                <p className="testimonials-review">Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum m Solve your doubt within an hours lorem i</p>
                                <div className="testimonials-user-details">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/profile_user.jpg"} alt="" />
                                    <div>
                                        <p className="testimonials-user-name">User Name</p>
                                        <p className="testimonials-user-class">Class name, city</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials-col col-sm-6">
                            <div className="testimonials-inner-col">
                                <p className="testimonials-review">Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum m Solve your doubt within an hours lorem i</p>
                                <div className="testimonials-user-details">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/profile_user.jpg"} alt="" />
                                    <div>
                                        <p className="testimonials-user-name">User Name</p>
                                        <p className="testimonials-user-class">Class name, city</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials-col col-sm-6">
                            <div className="testimonials-inner-col">
                                <p className="testimonials-review">Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum m Solve your doubt within an hours lorem i</p>
                                <div className="testimonials-user-details">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/profile_user.jpg"} alt="" />
                                    <div>
                                        <p className="testimonials-user-name">User Name</p>
                                        <p className="testimonials-user-class">Class name, city</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="faq">
                        <p className='text-center'>FAQs</p>
                    </div>

                    <div className="faq-question">
                        <a className="faq-question-div" data-bs-toggle="collapse" href="#faqCollpase1" role="button" aria-expanded="false" aria-controls="faqCollpase1">
                            <i className="ri-add-circle-line d-md-block d-none"></i>
                            <p className="faq-question-button">
                                Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet.
                            </p>
                            <p className="faq-answer collapse" id="faqCollpase1">Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt pri malogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhj ärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. </p>
                        </a>

                        <a className="faq-question-div" data-bs-toggle="collapse" href="#faqCollpase2" role="button" aria-expanded="false" aria-controls="faqCollpase2">
                            <i className="ri-add-circle-line d-md-block d-none"></i>
                            <p className="faq-question-button">
                                Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet.
                            </p>
                            <p className="faq-answer collapse" id="faqCollpase2">Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt pri malogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhj ärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. </p>
                        </a>

                        <a className="faq-question-div" data-bs-toggle="collapse" href="#faqCollpase3" role="button" aria-expanded="false" aria-controls="faqCollpase3">
                            <i className="ri-add-circle-line d-md-block d-none"></i>
                            <p className="faq-question-button">
                                Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet.
                            </p>
                            <p className="faq-answer collapse" id="faqCollpase3">Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt pri malogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhj ärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. </p>
                        </a>

                        <a className="faq-question-div" data-bs-toggle="collapse" href="#faqCollpase4" role="button" aria-expanded="false" aria-controls="faqCollpase4">
                            <i className="ri-add-circle-line d-md-block d-none"></i>
                            <p className="faq-question-button">
                                Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet.
                            </p>
                            <p className="faq-answer collapse" id="faqCollpase4">Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt pri malogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhj ärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. </p>
                        </a>

                        <a className="faq-question-div" data-bs-toggle="collapse" href="#faqCollpase5" role="button" aria-expanded="false" aria-controls="faqCollpase5">
                            <i className="ri-add-circle-line d-md-block d-none"></i>
                            <p className="faq-question-button">
                                Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet.
                            </p>
                            <p className="faq-answer collapse" id="faqCollpase5">Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt pri malogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhj ärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. Lörem ipsum beligt popcornhjärna har pobelt primalogi agnostitet. </p>
                        </a>

                    </div>

                    <div className="download-section">
                        <div className="download-row row">

                            <div className="download-col col-sm-6">
                                <p className="download-heading">Download App</p>
                                <p className="download-description">
                                    Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum Solve your doubt within an hours orem ipsum lorem ipsum lorem ispsum psum. Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum.
                                </p>
                                <div className="download-playbtn">
                                    <a href="##"><img src={process.env.PUBLIC_URL + "/assets/images/app-store.svg"} alt="" /></a>
                                    <a href="##"><img src={process.env.PUBLIC_URL + "/assets/images/play-store.png"} alt="" /></a>
                                </div>
                            </div>

                            <div className="download-col col-sm-6 d-none d-sm-flex">
                                <img className="download-mockup" src={process.env.PUBLIC_URL + "/assets/images/Success-mockup.svg"} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="footer-row row">
                            <div className="footer-col col-md-4 col-sm-6">
                                <div className="footer-inner-col">
                                    <p className="footer-heading">DouBT</p>
                                    <p className="footer-description footer-description2">
                                        Solve your doubt within an hours lorem ipsum lorem ipsum lorem ispsum Solve your doubt within an hours orem ipsum. t within an hours orem ipsum.
                                    </p>
                                </div>
                            </div>
                            <div className="footer-col col-md-5 col-sm-6">
                                <div className="footer-inner-col">
                                    <p className="footer-heading">Newsletter</p>
                                    <p className="footer-description">
                                        Solve your doubt within an hours lorem ipsum lorem
                                    </p>
                                    <form className="footer-form">
                                        <input type="email" placeholder="Your email" />
                                        <button>Submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className="footer-col col-md-3 col-sm-12">
                                <div className="footer-inner-col">
                                    <p className="footer-heading">Follow us</p>
                                    <ul className="social-media-list">
                                        <a href="##"><li>Instagram</li></a>
                                        <a href="##"><li>Linkedin</li></a>
                                        <a href="##"><li>Twitter</li></a>
                                        <a href="##"><li>Facebook</li></a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="copyright">
                    <p>Copyright @2022 All Right Reserved <a href="##">DouBT</a></p>
                </div>
            </div>
            {/* home - end */}
        </>
    )
}

export default Home;