import React from "react";
import Lang from "./../../i18n/lang";
import languageSet from "../../utilites/languageSet";


class SocialContacts extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return (
            <div className="footer_block col-xs-3">
                <h4 className="footer_title">{Lang[displayLanguage].footer_socialcontacts_title}</h4>
                <p><a href="https://facebook.com" className="footer_link" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                <p><a href="https://linkedin.com" className="footer_link" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                <p><a href="https://youtube.com" className="footer_link" target="_blank" rel="noopener noreferrer">YouTube</a></p>
                <p><a href="https://vimeo.com" className="footer_link" target="_blank" rel="noopener noreferrer">Vimeo</a></p>
                <p><a href="https://skype.com" className="footer_link" target="_blank" rel="noopener noreferrer">Skype</a></p>
            </div>
        );
    }
}

export default SocialContacts;