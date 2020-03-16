import React from "react";
import {NavLink} from "react-router-dom";
import Lang from "./../../i18n/lang";
import languageSet from "../../utilites/languageSet";

class Signed extends React.Component {

    clearToken(){
        localStorage.setItem('token', '');
        localStorage.setItem('currentUser', '');
    }

    render() {
        let displayLanguage = languageSet();
        return (
            <div className="header_signup col-md-1">
                <ul className="header_nav-list">
                    <li className="header_nav-item">
                        <NavLink to='/profile' className='header_link' activeClassName='nav-active'>{Lang[displayLanguage].header_menu_profile}</NavLink>
                    </li>
                    <li className="header_nav-item" onClick={this.clearToken}>
                        <NavLink to='/' className='header_link' activeClassName='nav-active'>{Lang[displayLanguage].header_menu_logout}</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Signed;