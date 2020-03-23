import React from "react";
import Lang from "./../../i18n/lang";
import languageSet from "../../utilites/languageSet";
import {Link} from "react-router-dom";

class SignUp extends React.Component {


    render() {
        let displayLanguage = languageSet();
        return (

            <div className="header_signup col-md-1">
                <button className="button button-header">
                    <Link to={'/profile'}>{Lang[displayLanguage].header_btn_signup}</Link>
                </button>
            </div>
        )
    }
}

export default SignUp;