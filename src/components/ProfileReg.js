import React from "react";
import Lang from "./../i18n/lang";
import languageSet from "../utilites/languageSet";
import showAlert from "../utilites/showAlert";
import fire from "../database/fire";
import authErrorMessage from "../utilites/authErrorMessage";
/* This is an registration page */
class ProfileReg extends React.Component {

    displayLanguage = languageSet();
    targetClass = 'main__profilevalidmsg'; // div with this class

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }


    checkPasswordStrength = (password) => {
        // not less than 8 symbols
        // at least one special symbol _@#$%^()
        // at least one capital letter
        // at least one digit
        let passwordIsValid = true;

        if (password.length < 8) passwordIsValid = false;
        if (!password.match(/([0-9A-Za-z_@#$%^()])/g)) passwordIsValid = false;

        return passwordIsValid;
    };

    saveUser = (event) => {
        event.preventDefault();
        const doc = document;

        let pFirstName = doc.querySelector('#pFirstName').value,
            pLastName = doc.querySelector('#pLastName').value,
            pEmail = doc.querySelector('#pEmail').value,
            pPassword = doc.querySelector('#pPassword').value,
            pPasswordConfirmation = doc.querySelector('#pPasswordConfirmation').value;


        if (pFirstName === '') {showAlert(Lang[this.displayLanguage].profile_validmsg.pFirstName, this.targetClass); return;}
        if (!pFirstName.match(/^([A-Za-z]+)$/)) { showAlert(Lang[this.displayLanguage].profile_validmsg.pFirstName_match, this.targetClass); return;}
        if (pLastName === '') {showAlert(Lang[this.displayLanguage].profile_validmsg.pLastName, this.targetClass); return;}
        if (!pLastName.match(/^([A-Za-z]+)$/)) {showAlert(Lang[this.displayLanguage].profile_validmsg.pLastName_match, this.targetClass); return;}
        if (pEmail === '') {showAlert(Lang[this.displayLanguage].profile_validmsg.pEmail, this.targetClass); return;}
        if (!pEmail.match(/^.+@.+\..+$/)) {showAlert(Lang[this.displayLanguage].profile_validmsg.pEmail, this.targetClass); return;}
        if (pPassword === '') {showAlert(Lang[this.displayLanguage].profile_validmsg.pPassword, this.targetClass); return;}
        if (pPasswordConfirmation === '') {showAlert(Lang[this.displayLanguage].profile_validmsg.pPasswordConfirmation, this.targetClass); return;}
        if (pPassword !== pPasswordConfirmation) {showAlert(Lang[this.displayLanguage].profile_validmsg.pPassword_match, this.targetClass); return;}
        if (!this.checkPasswordStrength(pPassword)) {showAlert(Lang[this.displayLanguage].profile_validmsg.pPassword_strength, this.targetClass); return;}


        // if it is all ok

        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=>{
                showAlert(Lang[this.displayLanguage].profile_validmsg.success, this.targetClass, false);
            })
            .catch((error) => {
                authErrorMessage(error.code, this.targetClass);
            });

    };

    componentDidMount() {
        // Put data to input boxes if person had already logged in
        if (localStorage.getItem('currentUser') !== null){
            let currentUser = localStorage.getItem('currentUser');
            currentUser = currentUser.split(',');

            let pFirstName = document.querySelector('#pFirstName'),
                pLastName = document.querySelector('#pLastName'),
                pEmail = document.querySelector('#pEmail');

            pFirstName.value = currentUser[0];
            pLastName.value = currentUser[1];
            pEmail.value = currentUser[2];
        }
    };


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        let displayLanguage = this.displayLanguage;
        return (
            <form onSubmit={this.saveUser}>
                <div>
                    <h2 className="main__header">{Lang[displayLanguage].header_menu_profile}</h2>
                    <div className="main__profilevalidmsg">
                    </div>
                    <div className="main__passwordsecure">
                        <p><strong>{Lang[displayLanguage].profile_passwordsecure.title}</strong></p>
                        <ul>
                            <li>{Lang[displayLanguage].profile_passwordsecure.minlength}</li>
                            <li>{Lang[displayLanguage].profile_passwordsecure.specialsymbol}</li>
                            <li>{Lang[displayLanguage].profile_passwordsecure.capitalletter}</li>
                            <li>{Lang[displayLanguage].profile_passwordsecure.digit}</li>
                        </ul>
                    </div>
                    <div className="main__profile">
                        <div className="main__profileitem">
                            <h5 className="main__profileitem-title">{Lang[displayLanguage].profile_firstname}</h5>
                            <input type="text" id="pFirstName" name="first_name" className="main__profileitem-input" placeholder="Elena"/>
                        </div>
                        <div className="main__profileitem">
                            <h5 className="main__profileitem-title">{Lang[displayLanguage].profile_lastname}</h5>
                            <input type="text" id="pLastName" name="last_name" className="main__profileitem-input" placeholder="Johnes"/>
                        </div>
                        <div className="main__profileitem">
                            <h5 className="main__profileitem-title">{Lang[displayLanguage].profile_email}</h5>
                            <input type="text" id="pEmail" name="email" onChange={this.handleChange} className="main__profileitem-input" placeholder="e.johnes@gmail.com"/>
                        </div>
                        <div className="main__profileitem">
                            <h5 className="main__profileitem-title">{Lang[displayLanguage].profile_password}</h5>
                            <input type="password" id="pPassword" name="password" onChange={this.handleChange} className="main__profileitem-input"
                                   placeholder="******************"/>
                        </div>
                        <div className="main__profileitem last-profile-item">
                            <h5 className="main__profileitem-title">{Lang[displayLanguage].profile_confirm_password}</h5>
                            <input type="password" id="pPasswordConfirmation"
                                   className="main__profileitem-input"
                                   placeholder="*****************"/>
                        </div>
                        <button type={'submit'}
                                className="button button-accent">{Lang[displayLanguage].profile_btn_save}</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ProfileReg;