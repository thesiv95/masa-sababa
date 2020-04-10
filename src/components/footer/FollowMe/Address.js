import React from "react";
import Lang from "./../../../i18n/lang";
import languageSet from "../../../utilites/languageSet";

class Address extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return(
            <div>
                <h4 className="footer__title">{Lang[displayLanguage].footer_address_title}</h4>
                <div className="footer__block_address">
                    <p className="footer__text">SababaLife LLC</p>
                    <p className="footer__text">{Lang[displayLanguage].footer_address_street}</p>
                </div>
            </div>
        )
    }
}

export default Address;