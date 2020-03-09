import React from "react";
import {NavLink} from "react-router-dom";


class NavList extends React.Component {
    render() {
        return(
                <ul className="header_nav-list">
                    <li className="header_nav-item">
                        <NavLink to='/home' className='header_link' activeClassName='nav-active'>Home</NavLink>
                    </li>
                    <li className="header_nav-item">
                        <NavLink to='/about' className='header_link' activeClassName='nav-active'>About</NavLink>
                    </li>
                    <li className="header_nav-item">
                        <NavLink to='/blog' className='header_link' activeClassName='nav-active'>Blog</NavLink>
                    </li>
                </ul>
        )
    }
}



export default NavList;