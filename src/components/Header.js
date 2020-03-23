import React from "react";
import Logo from "./header/Logo"
import Nav from "./header/Nav";
import Search from "./header/Search";
import Signed from "./header/Signed";
import SignUp from "./header/SignUp";
import data from "./header/dataSearch"; // all search queries for all languages
import languageSet from "../utilites/languageSet";

// the single string will be splitted by '/' (title/url) because it is too hard to pass big objects :/
// idea: https://youtu.be/NnpISZANByg
// search items will be passed through props


class Header extends React.Component {

    displayLanguage = languageSet();

    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        }
    }

   checkToken = () => {
        if (localStorage.getItem('token') !== null && localStorage.getItem('currentUser') !== null){
            this.setState({isLogged: true});
        } else {
            this.setState({isLogged: false});
        }
    };

    componentDidMount() {
        this.checkToken();
    }

    render(){
        return (
                <header className="header container">
                    <div className="row">
                        <Logo/>
                        <Nav/>
                        <Search items={data[this.displayLanguage]}/>
                        {
                            this.state.isLogged
                                ? <Signed/>
                                : <SignUp/>
                        }
                    </div>
                </header>
        )
    }
}


export default Header;