import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import signUpImage from '../assets/images/SignUpImage (1).jpg'; // Assurez-vous que le chemin est correct

const SignUp = () => {
  const pageStyle = {
    height: '100vh', // Hauteur de la page complète
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden' // Désactiver le scroll
  };

  const leftColumnStyle = {
    backgroundColor: '#DFF6F0', // Couleur de fond spécifique pour la partie gauche
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2rem',
    height: '100vh' // Assure que la colonne prenne toute la hauteur de la page
  };

  const inputStyle = {
    borderRadius: '50px', // Bord arrondi complet pour les champs de formulaire
    border: 'none' // Enlever les bordures des champs de formulaire
  };

  const buttonPrimaryStyle = {
    backgroundColor: '#3EB489', // Nouvelle couleur du bouton principal
    border: 'none',
    borderRadius: '50px', // Bord arrondi complet pour les boutons
    color: 'white' // Couleur de la police en blanc
  };

  const buttonSecondaryStyle = {
    backgroundColor: '#3EB489', // Nouvelle couleur du bouton secondaire
    border: 'none',
    borderRadius: '50px', // Bord arrondi complet pour les boutons
    color: 'white' // Couleur de la police en blanc
  };

  const linkStyle = {
    color: '#007bff', // Couleur des liens
    textDecoration: 'none'
  };

  const linkHoverStyle = {
    textDecoration: 'underline' // Soulignement au survol pour les liens
  };

  return (
    <Container fluid className="p-0 m-0" style={pageStyle}>
      <Row noGutters className="w-100">
        <Col md={6} style={leftColumnStyle}>
          <h2 className="text-center mb-4">Créer un compte</h2>
          <Form className="mx-auto" style={{ maxWidth: '500px' }}>
            <Form.Group controlId="formFirstName">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" placeholder="Prénom" style={inputStyle} />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Nom" style={inputStyle} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" style={inputStyle} />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-4">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de passe" style={inputStyle} />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-3" style={buttonPrimaryStyle}>
              S’inscrire
            </Button>
            <Button variant="secondary" type="button" className="w-100" style={buttonSecondaryStyle}>
              Continuez avec Google
            </Button>
            <div className="text-center mt-3">
              <p>Vous êtes déjà inscrit ? <a href="/login" style={linkStyle} onMouseOver={e => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseOut={e => (e.currentTarget.style.textDecoration = linkStyle.textDecoration)}>Connectez-vous !</a></p>
            </div>
          </Form>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-end p-0">
          <img src={signUpImage} alt="Sign Up" className="img-fluid" style={{ height: '100vh', borderRadius: '0' }} />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
