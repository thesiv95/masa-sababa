import React from "react";

class NavList extends React.Component {
    render() {
        return(
                <ul className="header_nav-list">
                    <li className="header_nav-item">
                        <a className="header_link nav-active" href="/">Home</a>
                    </li>
                    <li className="header_nav-item">
                        <a className="header_link" href="/about">About</a>
                    </li>
                    <li className="header_nav-item">
                        <a className="header_link" href="/blog">Blog</a>
                    </li>
                </ul>
        )
    }
}



export default NavList;