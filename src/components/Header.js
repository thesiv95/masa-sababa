import React from "react";
import Logo from "./header/Logo"
import Nav from "./header/Nav";
import Search from "./header/Search";
import SignUp from "./header/SignUp";
class Header extends React.Component {

    render(){
        return (
            <div>
                <header className="header container">
                    <Logo/>
                    <Nav/>
                    <Search/>
                    <SignUp/>
                </header>
            </div>
        )
    }
}


export default Header;