import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importation des images
import LowTechLab from '../assets/images/LowTechLab.png';
import MountainRider from '../assets/images/MountainRider.png';
import RennesVilleEtMetropole from '../assets/images/RennesVilleEtMetropole.png';
import Yuba from '../assets/images/Yuba.png';
import Ecotable from '../assets/images/Ecotable.png';
import CommOwn from '../assets/images/CommOwn.png';

const EcoWebsiteExamples = () => {
  const ecoSites = [
    { name: 'Do Nation', imageUrl: LowTechLab, carbonFootprint: '0.29g CO2/page view', link: 'https://lowtechlab.org/fr' },
    { name: 'C40 Cities', imageUrl: MountainRider, carbonFootprint: '0.34g CO2/page view', link: 'https://www.mountain-riders.org/' },
    { name: 'Rennes Ville et Métropole', imageUrl: RennesVilleEtMetropole, carbonFootprint: '0.23g CO2/page view', link: 'https://marques.metropole.rennes.fr/' },
    { name: 'Yuba', imageUrl: Yuba, carbonFootprint: '0.23g CO2/page view', link: 'https://yuba.world/' },
    { name: 'Ecotable', imageUrl: Ecotable, carbonFootprint: '0.23g CO2/page view', link: 'https://ecotable.fr/fr' },
    { name: 'CommOwn', imageUrl: CommOwn, carbonFootprint: '0.23g CO2/page view', link: 'https://commown.coop/' },
  ];

  const groupedEcoSites = [];
  for (let i = 0; i < ecoSites.length; i += 3) {
    groupedEcoSites.push(ecoSites.slice(i, i + 3));
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768; // Customize this breakpoint as needed

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Exemples de Sites Éco-Conçus</h2>

      <style>
        {`
          .custom-carousel .carousel-control-prev,
          .custom-carousel .carousel-control-next {
            width: 6%; /* Slightly increase the width */
          }
          .custom-carousel .carousel-control-prev-icon,
          .custom-carousel .carousel-control-next-icon {
            filter: brightness(1.5); /* Increase brightness to make the icons slightly more visible */
          }
          .custom-carousel .carousel-item a {
            display: block;
            text-decoration: none;
            color: inherit;
          }
        `}
      </style>

      <Row>
        <Col>
          {isMobile ? (
            <Carousel controls={true} indicators={false} interval={2000} className="custom-carousel">
              {ecoSites.map((site, index) => (
                <Carousel.Item key={index}>
                  <a href={site.link} target="_blank" rel="noopener noreferrer">
                    <div className="card mb-4" style={{ borderRadius: '10px' }}>
                      <img
                        className="card-img-top"
                        src={site.imageUrl}
                        alt={site.name}
                        style={{ height: '250px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                      />
                      <div className="card-body text-center" style={{ backgroundColor: '#3EB489', borderRadius: '0 0 10px 10px' }}>
                        <h5 className="card-title text-white">{site.name}</h5>
                        <p className="card-text text-white">{site.carbonFootprint}</p>
                      </div>
                    </div>
                  </a>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <Carousel controls={true} indicators={false} interval={2000} className="custom-carousel">
              {groupedEcoSites.map((group, index) => (
                <Carousel.Item key={index}>
                  <Row>
                    {group.map((site, idx) => (
                      <Col key={idx} xs={12} md={4} className="d-flex align-items-stretch">
                        <a href={site.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                          <div className="card mb-4" style={{ width: '100%', borderRadius: '10px' }}>
                            <img
                              className="card-img-top"
                              src={site.imageUrl}
                              alt={site.name}
                              style={{ width: '100%', height: '250px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
                            />
                            <div className="card-body text-center" style={{ backgroundColor: '#3EB489', borderRadius: '0 0 10px 10px' }}>
                              <h5 className="card-title text-white">{site.name}</h5>
                              <p className="card-text text-white">{site.carbonFootprint}</p>
                            </div>
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EcoWebsiteExamples;
