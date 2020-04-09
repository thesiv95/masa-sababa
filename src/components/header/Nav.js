import React from "react";
import NavLang from "./Nav/NavLang";
import NavList from "./Nav/NavList";


class Nav extends React.Component {
    render() {
        return (
            <div className="header__nav col-md-3 col-sm-12">
                <NavLang/>
                <NavList/>
                
            </div>
        )
    }
}

export default Nav;