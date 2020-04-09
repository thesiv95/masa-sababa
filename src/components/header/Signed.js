import React from "react";
import {NavLink} from "react-router-dom";
import Lang from "./../../i18n/lang";
import languageSet from "../../utilites/languageSet";
import fire from '../../database/fire';

class Signed extends React.Component {

    displayLanguage = languageSet();


    logout = () => {
        fire.auth().signOut().catch((error) => {
            alert(error.message);
        });
    };


    render() {
        return (
            <div className="header__signup col-md-3 col-sm-12">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <NavLink to='/profile' className='header__link' activeClassName='nav-active'>{Lang[this.displayLanguage].profile_header}</NavLink>
                    </li>
                    <li className="header__nav-item" onClick={this.logout()}>
                        <NavLink to='/' className='header__link'>{Lang[this.displayLanguage].header_menu_logout}</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Signed;