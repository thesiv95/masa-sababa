import React from "react";
import NavLang from "./nav/NavLang";
import NavList from "./nav/NavList";

class Nav extends React.Component {
    render() {
        return (
            <div className="header_nav col-md-3">
                <NavLang/>
                <NavList/>
            </div>
        )
    }
}

export default Nav;