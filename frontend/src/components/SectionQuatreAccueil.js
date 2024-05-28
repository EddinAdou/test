import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SectionQuatreAccueil = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const cardRefs = useRef([]);

  const infoBoxStyle = {
    marginBottom: '1rem',
    padding: '1rem',
    backgroundColor: '#3EB489', // Couleur de fond des 'cards'
    color: 'white', // Couleur du texte en blanc
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s, max-height 0.2s ease-in-out', // Transition plus rapide
    position: 'relative',
    overflow: 'hidden',
  };

  const handleCardClick = (index) => {
    if (expandedCard === index) {
      cardRefs.current[index].style.maxHeight = '250px';
      setTimeout(() => {
        setExpandedCard(null);
      }, 50); // Un léger délai avant de fermer complètement
    } else {
      if (expandedCard !== null) {
        cardRefs.current[expandedCard].style.maxHeight = '250px';
      }
      setExpandedCard(index);
    }
  };

  const textTruncate = (text, limit) => {
    const words = text.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
  };

  const cardData = [
    {
      title: 'Formats Optimisés',
      content: "L'optimisation des formats de fichiers est essentielle pour réduire la taille des fichiers et améliorer les performances des sites web. En compressant les images avec des formats comme WebP et AVIF, en minifiant les fichiers CSS et JavaScript, et en utilisant des formats audio et vidéo efficaces tels que MP4 et OGG, vous pouvez significativement réduire la taille des fichiers. L'encodage adaptatif pour le streaming vidéo et l'utilisation de polices web optimisées contribuent également à cette optimisation. Enfin, l'usage de la mise en cache et des réseaux de distribution de contenu (CDN) permet de servir les fichiers plus rapidement et efficacement, réduisant ainsi la consommation de bande passante et l'empreinte carbone numérique.",
    },
    {
      title: 'Hébergement Durable',
      content: "Choisir un hébergeur vert est crucial pour réduire l'empreinte carbone de votre site web. Les hébergeurs verts utilisent des sources d'énergie renouvelable comme l'énergie solaire ou éolienne et adoptent des pratiques écoresponsables pour gérer leurs centres de données. En optant pour des hébergeurs certifiés ISO 14001 ou Energy Star, vous assurez une gestion environnementale efficace. Des exemples d'hébergeurs verts incluent GreenGeeks et SiteGround, qui utilisent des crédits d'énergie renouvelable. En soutenant ces hébergeurs, vous contribuez à un avenir plus durable tout en montrant votre engagement envers l'environnement à vos clients et partenaires.",
    },
    {
      title: 'Audits Green-IT',
      content: "Les audits Green-IT évaluent les pratiques et infrastructures informatiques d'une entreprise pour identifier des opportunités de réduction de la consommation d'énergie et des émissions de carbone. Ces audits recommandent des améliorations comme la virtualisation des serveurs, le remplacement des équipements énergivores, et une meilleure gestion des déchets électroniques. En suivant ces recommandations, les entreprises peuvent non seulement réduire leur empreinte carbone, mais aussi réaliser des économies et se conformer aux réglementations environnementales. Les audits Green-IT sont essentiels pour toute organisation cherchant à devenir plus durable et écoresponsable.",
    },
  ];

  return (
    <Container fluid className="my-5">
      <Row className="align-items-center">
        <Col xs={12} md={{ span: 10, offset: 1 }}>
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{
                ...infoBoxStyle,
                maxHeight: expandedCard === index ? '1000px' : '250px',
              }}
              onClick={() => handleCardClick(index)}
              onMouseEnter={(e) => {
                if (expandedCard !== index) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (expandedCard !== index) {
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            >
              <h3 className="mb-3">{card.title}</h3>
              <p className="mb-3">{expandedCard === index ? card.content : textTruncate(card.content, 30)}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default SectionQuatreAccueil;


