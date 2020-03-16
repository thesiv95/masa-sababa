import React from "react";
import {NavLink} from "react-router-dom";
import Lang from "./../../i18n/lang";
import languageSet from "../../utilites/languageSet";

class SignUp extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return (

            <div className="header_signup col-md-1">

                    <NavLink to='/profile'>
                        <button className="button button-header">
                            {Lang[displayLanguage].header_btn_signup}
                        </button>
                    </NavLink>

            </div>
        )
    }
}

export default SignUp;