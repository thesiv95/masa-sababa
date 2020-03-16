import React from "react";
import Lang from "./../i18n/lang";
import generateToken from "../utilites/generateToken";
import languageSet from "../utilites/languageSet";

class Profile extends React.Component {

    displayLanguage = languageSet();

    showAlert = (message, isError = true) => {
        let div = document.querySelector('.main_profilevalidmsg');
        div.style.display = 'block';
        div.className = `main_profilevalidmsg ${(isError) ? 'non-valid' : 'valid'}`;
        div.innerHTML = message;

        setTimeout(() => {
            div.style.display = 'none';
        }, 3000);
    }

    checkPasswordStrength = (password) => {
        // not less than 8 symbols
        // at least one special symbol _@#$%^()
        // at least one capital letter
        // at least one digit
        let passwordIsValid = true;

        if (password.length < 8) passwordIsValid = false;
        if (!password.match(/^([A-Za-z]+)$/)) passwordIsValid = false;
        if (!password.match(/^(_@#\$%\^\(\)+)$/)) passwordIsValid = false;
        if (!password.match(/^([0-9]+)$/)) passwordIsValid = false;

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

        if (pFirstName === '') {this.showAlert(Lang[this.displayLanguage].profile_validmsg.pFirstName); return;}
        if (!pFirstName.match(/^([A-Za-z]+)$/)) { this.showAlert(Lang[this.displayLanguage].profile_validmsg.pFirstName_match); return;}
        if (pLastName === '') {this.showAlert(Lang[this.displayLanguage].profile_validmsg.pLastName); return;}
        if (!pLastName.match(/^([A-Za-z]+)$/)) {this.showAlert(Lang[this.displayLanguage].profile_validmsg.pLastName_match); return;}
        if (pEmail === '') {this.showAlert(Lang[this.displayLanguage].profile_validmsg.pEmail); return;}
        if (!pEmail.match(/^.+@.+\..+$/)) {this.showAlert(Lang[this.displayLanguage].profile_validmsg.pEmail); return;}
        if (pPassword === '') {this.showAlert(Lang[this.displayLanguage].profile_validmsg.pPassword); return;}
        if (pPasswordConfirmation === '') {this.showAlert(Lang[this.displayLanguage].profile_validmsg.pPasswordConfirmation); return;}
        if (pPassword !== pPasswordConfirmation) {this.showAlert(Lang[this.displayLanguage].profile_validmsg.pPassword_match); return;}
        if (!this.checkPasswordStrength(pPassword)) {this.showAlert(Lang[this.displayLanguage].profile_validmsg.pPassword_strength); return;}


        // if it is all ok
        this.showAlert(Lang[this.displayLanguage].profile_validmsg.success, false);
        token = generateToken(pEmail, pPassword);
        localStorage.setItem('token', token);
        currentUser = `${pFirstName},${pLastName},${pEmail}`;
        localStorage.setItem('currentUser', currentUser);

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
                            <input type="email" id="pEmail" className="main_profileitem-input"
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