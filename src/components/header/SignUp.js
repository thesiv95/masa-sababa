import React from "react";
import Lang from "./../../i18n/lang";
import languageSet from "../../utilites/languageSet";
import {Link} from "react-router-dom";

class SignUp extends React.Component {

    render() {
        let displayLanguage = languageSet();
        return (
            <div className="header__signup col-md-3 col-sm-12">
                <button className="button button-header">
                    <Link to={'/profile'}>{Lang[displayLanguage].header_btn_signup}</Link>
                </button>
            </div>
        )
    }
}

export default SignUp;