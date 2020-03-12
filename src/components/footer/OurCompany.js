import React from "react";
import {NavLink} from "react-router-dom";
import Lang from "./../../i18n/lang";
import languageSet from "../../languageSet";

class OurCompany extends React.Component {
    render() {
        let displayLanguage = languageSet()
        return(

            <div className="footer_block col-xs-3">
                <h4 className="footer_title">{Lang[displayLanguage].footer_ourcompany_title}</h4>
                <p>
                    <NavLink to="/about" className="footer_link">{Lang[displayLanguage].footer_ourcompany_about}</NavLink>
                </p>
                <p>
                    <NavLink to="/blog" className="footer_link">{Lang[displayLanguage].footer_ourcompany_blog}</NavLink>
                </p>
            </div>
        )
    }
}

export default OurCompany;