import React from "react";
import {NavLink} from "react-router-dom";
import Lang from "./../../../i18n/lang"
import languageSet from "../../../utilites/languageSet";


class NavList extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return(
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <NavLink to='/' exact className='header__link' activeClassName='nav-active'>{Lang[displayLanguage].header_menu_home}</NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink to='/about' className='header__link' activeClassName='nav-active'>{Lang[displayLanguage].header_menu_about}</NavLink>
                    </li>
                    <li className="header__nav-item">
                        <NavLink to='/blog' className='header__link' activeClassName='nav-active'>{Lang[displayLanguage].header_menu_blog}
                        </NavLink>
                    </li>
                </ul>
        )
    }
}



export default NavList;