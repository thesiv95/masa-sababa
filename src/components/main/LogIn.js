import React from "react";
import Lang from "./../../i18n/lang";
import languageSet from "../../utilites/languageSet";
import showAlert from "../../utilites/showAlert";
import fire from "../../database/fire";
import authErrorMessage from "../../utilites/authErrorMessage";

/* This is an registration page */
class LogIn extends React.Component {

    displayLanguage = languageSet();
    targetClass = 'main_profilevalidmsg'; // div with this class

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }


    submitHandler = (event) => {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            showAlert('Welcome', this.targetClass, false);
        }).catch((error) => {
            authErrorMessage(error.code, this.targetClass);
        });
    };



    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        let displayLanguage = this.displayLanguage;
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <h2 className="main_header">{Lang[this.displayLanguage].header_login}</h2>
                    <div className="main_profilevalidmsg">
                    </div>

                    <div className="main_profile">
                        <div className="main_profileitem">
                            <h5 className="main_profileitem-title">{Lang[displayLanguage].profile_email}</h5>
                            <input type="text" id="pEmail" name="email" onChange={this.handleChange} className="main_profileitem-input" placeholder="e.johnes@gmail.com"/>
                        </div>
                        <div className="main_profileitem">
                            <h5 className="main_profileitem-title">{Lang[displayLanguage].profile_password}</h5>
                            <input type="password" id="pPassword" name="password" onChange={this.handleChange} className="main_profileitem-input" placeholder="******************"/>
                        </div>
                        <button type={'submit'} className="button button-accent">
                            {Lang[this.displayLanguage].main_btn_signup}
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default LogIn;