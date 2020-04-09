import React from "react";
import Lang from "./../../i18n/lang";
import languageSet from "../../utilites/languageSet";

class ContactUs extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return (
            <div className="footer__block col-xs-3">
                <h4 className="footer__title">{Lang[displayLanguage].footer_contactus_title}</h4>
                <p className="footer__text">
                    <img src="/img/bootstrap-icons/phone.svg" alt="phone" width="32" height="32" title="phone"/>
                    <a href="tel:03456789" className="footer__link">03456789</a>
                </p>
                <p className="footer__text">
                    <img src="/img/bootstrap-icons/geo.svg" alt="location" width="32" height="32" title="geo"/>
                        <a href="https://goo.gl/maps/4Ns4315AuiHwy1Px5" className="footer__link" target="_blank" rel="noopener noreferrer">{Lang[displayLanguage].footer_contactus_geo}</a>
                </p>
                <p className="footer__text">
                    <img src="/img/bootstrap-icons/envelope.svg" alt="email" width="32" height="32"
                         title="envelope"/>
                    <a href="mailto:info@sababalife.com" className="footer__link">info@sababalife.com</a>
                </p>
            </div>
        )
    }
}

export default ContactUs;