import React from "react";
import {NavLink} from "react-router-dom";

class SignUp extends React.Component {
    render() {
        return (
            <div className="header_signup col-md-1">
                <button className="button button-header">
                    <NavLink to='/profile'>Sign up</NavLink>
                </button>
            </div>
        )
    }
}

export default SignUp;