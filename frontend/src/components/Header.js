import React, { useState } from 'react';
import im1 from '../assets/images/im1.webp';
import '../styles/components/_header.scss';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="container-fluid landing-container">
            <header className="main-header">
                <Container className="header-container">
                    <Navbar expanded={expanded} expand="lg" className="w-100 p-0">
                        <Navbar.Brand href="#home" className="logo">Wardiere Inc.</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto w-100">
                                <Nav.Link href="#accueil" className="nav-link">Accueil</Nav.Link>
                                <Nav.Link href="#blog" className="nav-link">Blog</Nav.Link>
                                <Nav.Link href="#solutions" className="nav-link">Nos solutions</Nav.Link>
                                <Nav.Link href="#about" className="nav-link">A propos de nous</Nav.Link>
                                <Button className="btn btn-success ms-auto">S'inscrire</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
            <main className="row main-content align-items-center">
                <div className="col-md-6 image-content">
                    <img src={im1} alt="Solutions for your business" className="img-fluid img-rounded" />
                </div>
                <div className="col-md-6 text-content">
                    <h1>Flexible Solutions for Your Business</h1>
                    <p>
                        Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.
                        Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist.
                    </p>
                    <form className="form">
                        <input className="form-control" type="text" placeholder="https://exemple.com/" />
                        <button className="btn btn-success" type="submit">Valider</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Header;