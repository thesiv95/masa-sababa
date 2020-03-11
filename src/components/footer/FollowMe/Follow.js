import React from "react";
import Lang from "./../../../i18n/lang";
import languageSet from "../../../languageSet";

class Follow extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return (
            <div>
                <h4 className="footer_title">{Lang[displayLanguage].footer_followus_title}</h4>
                <div className="footer_block-socialbuttons">
                    <div className="footer_block-socialbutton">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <img src="img/facebook.svg" alt="fb" className="footer_block-socialimage"/>
                        </a>
                    </div>
                    <div className="footer_block-socialbutton">
                        <a href="https://www.skype.com" target="_blank" rel="noopener noreferrer">
                            <img src="img/skype.svg" alt="skype" className="footer_block-socialimage"/>
                        </a>
                    </div>
                    <div className="footer_block-socialbutton">
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <img src="img/linkedin.svg" alt="linkedin" className="footer_block-socialimage"/>
                        </a>
                    </div>
                    <div className="footer_block-socialbutton">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="img/instagram.svg" alt="insta" className="footer_block-socialimage"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Follow;