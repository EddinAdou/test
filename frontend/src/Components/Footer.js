import React from 'react';
import '../styles/components/_footer.scss';

const Footer = () => {
    return (
        <div className="container-fluid landing-container">
            <footer className="footer mt-5 pt-5 pb-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-3 mb-3 mb-md-0">
                            <div className="footer-logo">Wardiere Inc.</div>
                            <p className="slogan">Stay in the loop and sign up for the Wardiere newsletter.</p>
                        </div>

                        <div className="col-md-3 mb-3 mb-md-0">
                            <h5>Company</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Team</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-3 mb-md-0">
                            <h5>Documentation</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Help Centre</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 mb-md-0">
                        <form className="d-flex flex-column flex-md-row align-items-center">
                            <input className="form-control me-2" type="email" placeholder="Enter your email"/>
                            <button className="btn btn-success" type="submit">→</button>
                        </form>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-center">
                            <p>&copy; Wardiere Inc. All Rights Reserved 2024</p>
                            <p><a href="#">Terms & Conditions</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;