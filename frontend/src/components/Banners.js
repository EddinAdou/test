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
                buttonStyle={{ background: "#49c58f", color: "#ffffff", fontSize: "13px" }}
                declineButtonStyle={{ background: "#b22222", color: "#ffffff", fontSize: "13px" }}
                expires={150}
            >
                Ce site utilise des cookies pour améliorer l'expérience utilisateur.{" "}
            </CookieConsent>
        </div>
    );
}
export default Banners;