import React from "react";
import Lang from "./../../../i18n/lang";
import languageSet from "../../../utilites/languageSet";

class Follow extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return (
            <div>
                <h4 className="footer__title">{Lang[displayLanguage].footer_followus_title}</h4>
                <div className="footer__block_socialbuttons">
                    <div className="footer__block_socialbutton">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src="img/facebook.svg" alt="fb" className="footer__block_socialimage"/>
                        </a>
                    </div>
                    <div className="footer__block_socialbutton">
                        <a href="https://www.skype.com" target="_blank" rel="noopener noreferrer">
                            <img src="img/skype.svg" alt="skype" className="footer__block_socialimage"/>
                        </a>
                    </div>
                    <div className="footer__block_socialbutton">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src="img/linkedin.svg" alt="linkedin" className="footer__block_socialimage"/>
                        </a>
                    </div>
                    <div className="footer__block_socialbutton">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="img/instagram.svg" alt="insta" className="footer__block_socialimage"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Follow;