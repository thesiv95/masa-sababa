import React from "react";
import Logo from "./header/Logo"
import Nav from "./header/Nav";
import Search from "./header/Search";
import SignUp from "./header/SignUp";
import {BrowserRouter, Route} from "react-router-dom";
import Signed from "./header/Signed";


class Header extends React.Component {

    render(){
        return (
                <header className="header container">
                    <div className="row">
                        <Logo/>
                        <Nav/>
                        <Search/>
                        <BrowserRouter>

                            <Route path='/profile' component={Signed} />
                            <Route path='*' component={SignUp} />
                        </BrowserRouter>
                        {/*<SignUp/>*/}
                    </div>
                </header>
        )
    }
}


export default Header;