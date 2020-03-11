import React from "react";
import {NavLink} from "react-router-dom";
import Lang from "./../../../i18n/ru"


class NavList extends React.Component {
    render() {
        return(
                <ul className="header_nav-list">
                    <li className="header_nav-item">
                        <NavLink to='/home' className='header_link' activeClassName='nav-active'>{Lang.header_menu_home}</NavLink>
                    </li>
                    <li className="header_nav-item">
                        <NavLink to='/about' className='header_link' activeClassName='nav-active'>{Lang.header_menu_about}</NavLink>
                    </li>
                    <li className="header_nav-item">
                        <NavLink to='/blog' className='header_link' activeClassName='nav-active'>{Lang.header_menu_blog}</NavLink>
                    </li>
                </ul>
        )
    }
}



export default NavList;