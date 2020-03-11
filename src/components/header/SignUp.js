import React from "react";
import {NavLink} from "react-router-dom";
import Lang from "./../../i18n/ru";

class SignUp extends React.Component {
    render() {
        return (
            <div className="header_signup col-md-1">

                    <NavLink to='/profile'>
                        <button className="button button-header">
                            {Lang.header_btn_signup}
                        </button>
                    </NavLink>

            </div>
        )
    }
}

/* if Profile page

*/

export default SignUp;