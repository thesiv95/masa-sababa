import React from "react";
import Logo from "./header/Logo"
import Nav from "./header/Nav";
import Search from "./header/Search";
import SignUp from "./header/SignUp";
class Header extends React.Component {

    render(){
        return (
                <header className="header container">
                    <div className="row">
                        <Logo/>
                        <Nav/>
                        <Search/>
                        <SignUp/>
                    </div>
                </header>
        )
    }
}


export default Header;