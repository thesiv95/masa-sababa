import React from "react";
import Lang from "./../i18n/lang";
import generateToken from "../utilites/generateToken";
import languageSet from "../utilites/languageSet";
import showAlert from "../utilites/showAlert";

class Profile extends React.Component {

    displayLanguage = languageSet();

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
        let token = null, currentUser = null;

        let pFirstName = doc.querySelector('#pFirstName').value,
            pLastName = doc.querySelector('#pLastName').value,
            pEmail = doc.querySelector('#pEmail').value,
            pPassword = doc.querySelector('#pPassword').value,
            pPasswordConfirmation = doc.querySelector('#pPasswordConfirmation').value;

        let targetClass = 'main_profilevalidmsg'; // div with this class

        if (pFirstName === '') {showAlert(Lang[this.displayLanguage].profile_validmsg.pFirstName, targetClass); return;}
        if (!pFirstName.match(/^([A-Za-z]+)$/)) { showAlert(Lang[this.displayLanguage].profile_validmsg.pFirstName_match, targetClass); return;}
        if (pLastName === '') {showAlert(Lang[this.displayLanguage].profile_validmsg.pLastName, targetClass); return;}
        if (!pLastName.match(/^([A-Za-z]+)$/)) {showAlert(Lang[this.displayLanguage].profile_validmsg.pLastName_match, targetClass); return;}
        if (pEmail === '') {showAlert(Lang[this.displayLanguage].profile_validmsg.pEmail, targetClass); return;}
        if (!pEmail.match(/^.+@.+\..+$/)) {showAlert(Lang[this.displayLanguage].profile_validmsg.pEmail, targetClass); return;}
        if (pPassword === '') {showAlert(Lang[this.displayLanguage].profile_validmsg.pPassword, targetClass); return;}
        if (pPasswordConfirmation === '') {showAlert(Lang[this.displayLanguage].profile_validmsg.pPasswordConfirmation, targetClass); return;}
        if (pPassword !== pPasswordConfirmation) {showAlert(Lang[this.displayLanguage].profile_validmsg.pPassword_match, targetClass); return;}
        if (!this.checkPasswordStrength(pPassword)) {showAlert(Lang[this.displayLanguage].profile_validmsg.pPassword_strength, targetClass); return;}


        // if it is all ok
        showAlert(Lang[this.displayLanguage].profile_validmsg.success, targetClass, false);
        token = generateToken(pEmail, pPassword);
        sessionStorage.setItem('token', token);
        currentUser = `${pFirstName},${pLastName},${pEmail}`;
        sessionStorage.setItem('currentUser', currentUser);

    };

    componentDidMount() {
        if (sessionStorage.getItem('currentUser') !== null){
            let currentUser = sessionStorage.getItem('currentUser');
            currentUser = currentUser.split(',');

            let pFirstName = document.querySelector('#pFirstName'),
                pLastName = document.querySelector('#pLastName'),
                pEmail = document.querySelector('#pEmail');

            pFirstName.value = currentUser[0];
            pLastName.value = currentUser[1];
            pEmail.value = currentUser[2];
        }
    };

    render() {
        let displayLanguage = this.displayLanguage;
        return (
            <form onSubmit={this.saveUser}>
                <div>
                    <h2 className="main_header">{Lang[displayLanguage].profile_header}</h2>
                    <div className="main_profilevalidmsg">
                    </div>
                    <div className="main_passwordsecure">
                        <p><strong>{Lang[displayLanguage].profile_passwordsecure.title}</strong></p>
                        <ul>
                            <li>{Lang[displayLanguage].profile_passwordsecure.minlength}</li>
                            <li>{Lang[displayLanguage].profile_passwordsecure.specialsymbol}</li>
                            <li>{Lang[displayLanguage].profile_passwordsecure.capitalletter}</li>
                            <li>{Lang[displayLanguage].profile_passwordsecure.digit}</li>
                        </ul>
                    </div>
                    <div className="main_profile">
                        <div className="main_profileitem profileitem-short">
                            <h5 className="main_profileitem-title">{Lang[displayLanguage].profile_firstname}</h5>
                            <input type="text" id="pFirstName" className="main_profileitem-input" placeholder="Elena"/>
                        </div>
                        <div className="main_profileitem profileitem-short">
                            <h5 className="main_profileitem-title">{Lang[displayLanguage].profile_lastname}</h5>
                            <input type="text" id="pLastName" className="main_profileitem-input" placeholder="Johnes"/>
                        </div>
                        <div className="main_profileitem">
                            <h5 className="main_profileitem-title">{Lang[displayLanguage].profile_email}</h5>
                            <input type="text" id="pEmail" className="main_profileitem-input"
                                   placeholder="e.johnes@gmail.com"/>
                        </div>
                        <div className="main_profileitem">
                            <h5 className="main_profileitem-title">{Lang[displayLanguage].profile_password}</h5>
                            <input type="password" id="pPassword" className="main_profileitem-input"
                                   placeholder="******************"/>
                        </div>
                        <div className="main_profileitem">
                            <h5 className="main_profileitem-title">{Lang[displayLanguage].profile_confirm_password}</h5>
                            <input type="password" id="pPasswordConfirmation"
                                   className="main_profileitem-input"
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

export default Profile;