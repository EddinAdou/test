import  React from "react";
import CookieConsent from "react-cookie-consent";
import '../styles/components/_banners.scss';

const Banners = () => {
    return (
        <div className="container-fluid landing-container">
            <CookieConsent
                location="bottom"
                buttonText="Accepter"
                declineButtonText="Refuser"
                enableDeclineButton
                cookieName="cookieConsent"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                declineButtonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
            >
                Ce site utilise des cookies pour améliorer l'expérience utilisateur.{" "}
            </CookieConsent>
        </div>
    );
}
export default Banners;