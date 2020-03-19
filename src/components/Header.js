import React from "react";
import Logo from "./header/Logo"
import Nav from "./header/Nav";
import Search from "./header/Search";
import Signed from "./header/Signed";
import SignUp from "./header/SignUp";


class Header extends React.Component {

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
                        <Search/>
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