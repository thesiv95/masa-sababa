import React from "react";
import Lang from "./../../../../i18n/lang";
import languageSet from "../../../../utilites/languageSet";
import generateToken from "../../../../utilites/generateToken";
import showAlert from "../../../../utilites/showAlert";
import fire from "../../../../database/fire";

class LeaveReply extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addingReply: false,
            reply: null
        }
    }

    displayLanguage = languageSet();
    targetClass = 'main__leavereply_message';
    startCommentsIndex = 2; // We pass this value to DB. New value means new comment

    changeStateOfTextarea = (event) => {
        this.setState({
            reply: event.target.value
        })
    };

    writeDataToDataBase = () => {
        // Image link will be hardcoded at this point
        let imgUrl = 'https://via.placeholder.com/32';

        // Define logged user name. If no one is logged at Firebase DB, we will write 'Anonymous'
        let loggedUser = fire.auth().currentUser ? fire.auth().currentUser : 'Anonymous';

        let startCommentsIndex = this.startCommentsIndex;

        fire.database().ref('/comments/' + startCommentsIndex).set({
            avatarUrl: imgUrl,
            name: loggedUser,
            text: this.state.reply
        })
        .then(result => {
            console.log(result);
            showAlert(Lang[this.displayLanguage].reply_validmsg.success, this.targetClass, false);
        })
        .catch(error => {
            showAlert(error.message, this.targetClass);
        });

        this.startCommentsIndex++;
    };


    addComment = () => {
        let replyText = document.querySelector('#replyText'),
            replyName = document.querySelector('#replyName'),
            replyEmail = document.querySelector('#replyEmail'),
            replyCheck = document.querySelector('#replyCheck');

        if (replyText.value === '') { showAlert(Lang[this.displayLanguage].reply_validmsg.text, this.targetClass); return; }
        if (replyName.value === '') { showAlert(Lang[this.displayLanguage].reply_validmsg.name, this.targetClass); return; }
        if (replyEmail.value === '') { showAlert(Lang[this.displayLanguage].reply_validmsg.email, this.targetClass); return; }
        if (!replyEmail.value.match(/^.+@.+\..+$/)) { showAlert(Lang[this.displayLanguage].reply_validmsg.email_match, this.targetClass); return; }
        // If all fields are filled and correct:
        if (replyCheck.checked) {
            // if nothing from firebase has come, we will generate token on a client
            if (fire.auth().currentUser === null) localStorage.setItem('SABABA_usertoken', generateToken(replyEmail));
        }

        this.writeDataToDataBase(replyText.value, replyName.value);

    };

    render() {
        let displayLanguage = this.displayLanguage;
        return (
            <div className='main__leavereply'>
                    <div className='main__leavereply_message'>
                    </div>

                    <h3>{Lang[displayLanguage].reply_title}</h3>
                    <textarea id="replyText" placeholder={Lang[displayLanguage].reply_placeholder_yourtext} className='main__leavereply_textarea' onChange={this.changeStateOfTextarea} />
                    <div className="main__leavereply_inputs">
                        <input id="replyName" type="text" placeholder={Lang[displayLanguage].reply_placeholder_yourname} className="main__leavereply_input" />
                        <input id="replyEmail" type="text" placeholder={Lang[displayLanguage].reply_placeholder_youremail} className="main__leavereply_input" />
                    </div>
                    <div className="main__leavereply_send">
                        <input id="replyCheck" type="checkbox" className="main__leavereply_checkbox"/>
                        {Lang[displayLanguage].reply_checkbox}<br/>
                        <button className="button button-accent" onClick={this.addComment}>{Lang[displayLanguage].reply_btn}</button>
                    </div>
            </div>
        )
    }
}





export default LeaveReply;
