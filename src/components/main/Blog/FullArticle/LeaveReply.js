import React from "react";
import Lang from "./../../../../i18n/lang";
import languageSet from "../../../../utilites/languageSet";
import generateToken from "../../../../utilites/generateToken";
import showAlert from "../../../../utilites/showAlert";
import dateAndAuthorFormatted from "../../../../utilites/dateAndAuthorFormatted";


class LeaveReply extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addingReply: false
        }
    }

    displayLanguage = languageSet();

    addToStorage = (text, name) => {
        let d = new Date(); // get current date
        let date = dateAndAuthorFormatted(d.getDay(), d.getMonth(), d.getFullYear(), name, 'reply');
        let comment = `${text}:${name}:${date}`;

        if (localStorage.getItem('comments') === null || localStorage.getItem('comments') === ''){
            localStorage.setItem('comments', comment); // this is the 1st comment
        } else { // if there already were comments
            let allComments = localStorage.getItem('comments');
            allComments += `,${comment}`;
            localStorage.setItem('comments', allComments);
        }
    };

    addComment = () => {
        let replyText = document.querySelector('#replyText'),
            replyName = document.querySelector('#replyName'),
            replyEmail = document.querySelector('#replyEmail'),
            replyCheck = document.querySelector('#replyCheck');

        if (replyText.value === '') { showAlert(Lang[this.displayLanguage].reply_validmsg.text, 'main_leavereply_message'); return; }
        if (replyName.value === '') { showAlert(Lang[this.displayLanguage].reply_validmsg.name, 'main_leavereply_message'); return; }
        if (replyEmail.value === '') { showAlert(Lang[this.displayLanguage].reply_validmsg.email, 'main_leavereply_message'); return; }
        if (!replyEmail.value.match(/^.+@.+\..+$/)) { showAlert(Lang[this.displayLanguage].reply_validmsg.email_match, 'main_leavereply_message'); return; }

        if (sessionStorage.getItem('tokenComment') === null){
            if (replyCheck.checked) sessionStorage.setItem('tokenComment', generateToken(replyEmail));
            this.addToStorage(replyText.value, replyName.value);
        } else {
            this.addToStorage(replyText.value, replyName.value);
        }

        showAlert(Lang[this.displayLanguage].reply_validmsg.success, 'main_leavereply_message', false);

    };

    render() {
        let displayLanguage = this.displayLanguage;
        return (
            <div className='main_leavereply'>
                    <div className='main_leavereply_message'>
                    </div>
                    <a name='reply'/>
                    <h3>{Lang[displayLanguage].reply_title}</h3>
                    <textarea id="replyText" placeholder={Lang[displayLanguage].reply_placeholder_yourtext} className='main_leavereply-textarea' />
                    <div className="main_leavereply-inputs">
                        <input id="replyName" type="text" placeholder={Lang[displayLanguage].reply_placeholder_yourname} className="main_leavereply-input" />
                        <input id="replyEmail" type="text" placeholder={Lang[displayLanguage].reply_placeholder_youremail} className="main_leavereply-input" />
                    </div>
                    <div className="main_leavereply-send">
                        <input id="replyCheck" type="checkbox" className="main_leavereply-checkbox"/>
                        {Lang[displayLanguage].reply_checkbox}<br/>
                        <button className="button button-accent" onClick={this.addComment}>{Lang[displayLanguage].reply_btn}</button>
                    </div>
            </div>
        )
    }
}


// todo: search


export default LeaveReply;
