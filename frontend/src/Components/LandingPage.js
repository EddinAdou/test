import React from 'react';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className="container-fluid landing-container">
            <header className="d-flex justify-content-between align-items-center py-3">
                <div className="logo">Wardiere Inc.</div>
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><a className="nav-link" href="#accueil">Accueil</a></li>
                        <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
                        <li className="nav-item"><a className="nav-link" href="#solutions">Nos solutions</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">A propos de nous</a></li>
                    </ul>
                </nav>
                <button className="btn btn-success">S'inscrire</button>
            </header>
            <main className="row main-content align-items-center">
                <div className="col-md-6 text-content">
                    <h1>Flexible Solutions for Your Business</h1>
                    <p>
                        Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.
                        Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist.
                    </p>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="https://exemple.com/"/>
                        <button className="btn btn-success" type="submit">Valider</button>
                    </form>
                </div>
                <div className="col-md-6 image-content">
                    <img src={im1} alt="Solutions for your business" className="img-fluid rounded"/>
                </div>
            </main>
            <main className="row main-content align-items-center mt-5">
                <div className="col-md-6 text-content">
                    <h1>L'Importance de l'Éco-Conception dans les Sites Web</h1>
                    <p>
                        L'éco-conception des sites web réduit l'impact environnemental du numérique en créant des sites
                        plus légers qui consomment moins d'énergie et de bande passante.
                    </p>
                    <p>
                        Cette approche diminue les émissions de gaz à effet de serre et optimise les performances,
                        rendant les sites plus accessibles et plus rapides.
                    </p>
                    <p>
                        Ainsi, l'éco-conception améliore l'expérience utilisateur tout en préservant notre planète,
                        bénéficiant à la fois à l'efficacité du site et à la satisfaction des utilisateurs.
                    </p>
                </div>
                <div className="col-md-6 image-content">
                    <img src={im2} alt="Éco-Conception" className="img-fluid rounded"/>
                </div>
            </main>
            <footer className="footer mt-5 pt-5 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-logo">Wardiere Inc.</div>
                            <p className="slogan">Stay in the loop and sign up for the Wardiere newsletter.</p>
                            <form className="d-flex">
                                <input className="form-control me-2" type="email" placeholder="Enter your email"/>
                                <button className="btn btn-success" type="submit">→</button>
                            </form>
                        </div>
                        <div className="col-md-3">
                            <h5>Company</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Team</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Documentation</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Help Centre</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Social</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Youtube</a></li>
                                <li><a href="#">Twitter</a></li>
                            </ul>
                        </div>
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

export default LandingPage;
