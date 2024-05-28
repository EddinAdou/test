import React from 'react';
import ImageSectionDeux from '../assets/images/ImageSectionDeux.webp'; // Adjust the path as necessary

const SectionDeuxAccueil = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Colonne pour l'image */}
                <div className="col-md-6">
                    <img src={ImageSectionDeux} alt="Description de l'image" className="img-fluid img-rounded" />
                </div>
                {/* Colonne pour le texte avec le titre centré */}
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className="content-section">
                        <h2 className="text-center">L'Importance de l'Éco-Conception dans les Sites Web</h2>
                        <p>L'éco-conception des sites web réduit l'impact environnemental du numérique en créant des sites plus légers qui consomment moins d'énergie et de bande passante. Cette approche diminue les émissions de gaz à effet de serre et optimise les performances, rendant les sites plus accessibles et plus rapides. Ainsi, l'éco-conception améliore l'expérience utilisateur tout en préservant notre planète, bénéficiant à la fois à l'efficacité du site et à la satisfaction des utilisateurs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionDeuxAccueil;
