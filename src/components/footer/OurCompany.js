import React from "react";
import {NavLink} from "react-router-dom";
import Lang from "./../../i18n/lang";
import languageSet from "../../utilites/languageSet";

class OurCompany extends React.Component {
    render() {
        let displayLanguage = languageSet()
        return(

            <div className="footer__block col-xs-3">
                <h4 className="footer__title">{Lang[displayLanguage].footer_ourcompany_title}</h4>
                <p>
                    <NavLink to="/about" className="footer__link">{Lang[displayLanguage].footer_ourcompany_about}</NavLink>
                </p>
                <p>
                    <NavLink to="/blog" className="footer__link">{Lang[displayLanguage].footer_ourcompany_blog}</NavLink>
                </p>
            </div>
        )
    }
}

export default OurCompany;