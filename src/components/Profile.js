import React from "react";
import Lang from "./../i18n/lang";
import generateToken from "../generateToken";

class Profile extends React.Component {

    saveUser = (event) => {

        

        let login = 'dsasxzs',
            pass = '4323qe';
        
        let a = generateToken(login, pass)
        console.log(a)
    }

    render() {
        return (
            <form onSubmit={this.saveUser()}>
                <div>
                <h2 className="main_header">{Lang.ru.profile_header}</h2>
                <div className="main_profile">
                    <div className="main_profileitem profileitem-short">
                        <h5 className="main_profileitem-title">{Lang.ru.profile_firstname}</h5>
                        <input type="text" id="pFirstName" className="main_profileitem-input" placeholder="Elena"/>
                    </div>
                    <div className="main_profileitem profileitem-short">
                        <h5 className="main_profileitem-title">{Lang.ru.profile_lastname}</h5>
                        <input type="text" id="pLastName" className="main_profileitem-input" placeholder="Johnes"/>
                    </div>
                    <div className="main_profileitem">
                        <h5 className="main_profileitem-title">{Lang.ru.profile_email}</h5>
                        <input type="email" required id="pEmail" className="main_profileitem-input"
                               placeholder="e.johnes@gmail.com"/>
                    </div>
                    <div className="main_profileitem">
                        <h5 className="main_profileitem-title">{Lang.ru.profile_password}</h5>
                        <input type="password" required id="pPassword" className="main_profileitem-input"
                               placeholder="******************"/>
                    </div>
                    <div className="main_profileitem">
                        <h5 className="main_profileitem-title">{Lang.ru.profile_confirm_password}</h5>
                        <input type="password" required id="pPasswordConfirmation" className="main_profileitem-input"
                               placeholder="*****************"/>
                    </div>
                    <button type={'submit'} className="button button-accent">{Lang.ru.profile_btn_save}</button>
                </div>
            </div>
            </form>
        )
    }
}

export default Profile;