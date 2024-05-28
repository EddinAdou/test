import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import IconeUn from '../assets/icones/SectionTroisIconeUn.png'; // Ajustez le chemin selon la structure de votre projet
import IconeDeux from '../assets/icones/SectionTroisIconeDeux.png';
import IconeTrois from '../assets/icones/SectionTroisIconeTrois.png';

const SectionTrois = () => {
  const sectionStyle = {
    padding: '4rem 0' // Enlever la couleur de fond
  };

  const separatorStyle = {
    width: '90%', // Ajustez la largeur selon vos besoins
    height: '2px', // Barre plus fine
    backgroundColor: 'black',
    margin: '0 auto 2rem auto' // Centrer et ajouter de l'espace en bas
  };

  const cardStyle = {
    backgroundColor: '#3EB489', // Couleur de fond spécifiée
    color: 'white',
    padding: '2rem',
    borderRadius: '20px', // Bord arrondi
    marginBottom: '1rem', // Espace entre les cartes sur mobile
    textAlign: 'center' // Centrer le contenu du texte et de l'image
  };

  const imageStyle = {
    height: '120px', // Trois fois plus grand que 40px
    marginTop: '1rem'
  };

  const colStyle = {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    marginBottom: '1rem' // Ajoutez une marge en bas pour espacer les cartes
  };

  const titleStyle = {
    color: 'black',
    fontSize: '2rem', // Taille équivalente à un h2
    fontWeight: 'normal', // Texte non gras
    textAlign: 'center',
    marginBottom: '3rem' // Espace en dessous du titre
  };

  const percentageStyle = {
    color: 'black'
  };

  const containerFluidStyle = {
    maxWidth: '1200px', // Ajustez cette largeur pour qu'elle soit la même que le container précédent
    margin: '0 auto' // Centrer le container
  };

  return (
    <Container fluid style={sectionStyle}>
      <div style={separatorStyle}></div>
      <Container fluid style={containerFluidStyle}>
        <Row className="text-center mb-5">
          <Col>
            <p style={titleStyle}>Il existe plusieurs solutions pour vous aider à réduire votre empreinte carbone.</p>
          </Col>
        </Row>
        <Row className="justify-content-center mx-2">
          <Col xs={12} md={4} className="d-flex" style={colStyle}>
            <Card style={cardStyle} className="flex-fill">
              <Card.Body>
                <Card.Title className="mb-3">Hébergement Web Vert</Card.Title>
                <Card.Text>
                  Un hébergement web vert peut réduire les émissions de carbone de <span style={percentageStyle}>30% à 60%</span>.
                </Card.Text>
                <img src={IconeUn} alt="Hébergement Web Vert" style={imageStyle} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="d-flex" style={colStyle}>
            <Card style={cardStyle} className="flex-fill">
              <Card.Body>
                <Card.Title className="mb-3">Utilisation Efficace de la Mémoire Cache</Card.Title>
                <Card.Text>
                  Une utilisation efficace de la mémoire cache peut réduire les requêtes serveur jusqu'à <span style={percentageStyle}>60%</span>.
                </Card.Text>
                <img src={IconeDeux} alt="Utilisation Efficace de la Mémoire Cache" style={imageStyle} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="d-flex" style={colStyle}>
            <Card style={cardStyle} className="flex-fill">
              <Card.Body>
                <Card.Title className="mb-3">Recyclage et Réduction des Déchets</Card.Title>
                <Card.Text>
                  Nos pratiques de recyclage permettent de réduire les déchets et d'optimiser l'utilisation des ressources.
                </Card.Text>
                <img src={IconeTrois} alt="Recyclage et Réduction des Déchets" style={imageStyle} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SectionTrois;
