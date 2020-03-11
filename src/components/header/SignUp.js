import React from "react";
import {NavLink} from "react-router-dom";
import Lang from "./../../i18n/ru";

class SignUp extends React.Component {
    render() {
        return (
            <div className="header_signup col-md-1">
                <button className="button button-header">
                    <NavLink to='/profile'>{Lang.header_btn_signup}</NavLink>
                </button>
            </div>
        )
    }
}

/* if Profile page

*/

export default SignUp;