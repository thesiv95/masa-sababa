import React from "react";
import Lang from "./../i18n/lang";
import generateToken from "../utilites/generateToken";
import languageSet from "../utilites/languageSet";

class Profile extends React.Component {

    saveUser = (event) => {
        event.preventDefault();
        const doc = document;
        let valid = true, token = null, currentUser = null;

        let pFirstName = doc.querySelector('#pFirstName').value,
            pLastName = doc.querySelector('#pLastName').value,
            pEmail = doc.querySelector('#pEmail').value,
            pPassword = doc.querySelector('#pPassword').value,
            pPasswordConfirmation = doc.querySelector('#pPasswordConfirmation').value;

        let user = [pFirstName, pLastName, pEmail, pPassword, pPasswordConfirmation];

        for (let i = 0; user.length; i++){
            if (user[i] !== ''){
                valid = false;
            }
        }

        if (pPassword !== pPasswordConfirmation) valid = false;

        if (valid){
            alert("reg ok");
            token = generateToken(pEmail, pPassword);
            currentUser = `${pFirstName},${pLastName},${pEmail},${pPassword},${pPasswordConfirmation}`;
            localStorage.setItem('token', token);
            localStorage.setItem('currentUser', currentUser);
        } else {
            alert('non-valid');
        }


    };

    loadUser = () => {
        console.log('load user');
    }

    render() {
        let displayLanguage = languageSet();
        return (
            <form onSubmit={this.saveUser}>
                <div>
                    <h2 className="main_header">{Lang[displayLanguage].profile_header}</h2>
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