import React from "react";
import Logo from "./header/Logo"
import Nav from "./header/Nav";
import Search from "./header/Search";
import Signed from "./header/Signed";
// import SignUp from "./header/SignUp";
import data from "./header/dataSearch"; // all search queries for all languages
import languageSet from "../utilites/languageSet";
import fire from '../database/fire';

// the single string will be splitted by '/' (title/url) because it is too hard to pass big objects :/
// idea: https://youtu.be/NnpISZANByg
// search items will be passed through props

class Header extends React.Component {

    displayLanguage = languageSet();

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({ user });
                localStorage.setItem('SABABALIFE_user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('SABABALIFE_user');
            }
        });
    }

    componentDidMount() {
        this.authListener();
    }

    render(){
        return (
                <header className="header container-fluid hidden-print">
                    <div className="row">
                        <Logo/>
                        <Nav/>
                        <Search items={data[this.displayLanguage]}/>
                        <Signed/>
                        
                        {/*{this.state.user ? <Signed/> : <SignUp/>}*/}
                    </div>
                </header>
        )
    }
}


export default Header;