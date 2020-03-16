import React from "react";
import Lang from "./../../../../i18n/lang";
import languageSet from "../../../../utilites/languageSet";
import generateToken from "../../../../utilites/generateToken";


class LeaveReply extends React.Component {

    /*

    name:text:date,name:text:date

     */

    constructor(props) {
        super(props);
        this.state = {
            addingReply: false
        }
    }

    addComment = () => {

        let replyText = document.querySelector('#replyText'),
            replyName = document.querySelector('#replyName'),
            replyEmail = document.querySelector('#replyEmail'),
            replyCheck = document.querySelector('#replyCheck');


        if (sessionStorage.getItem('tokenComment') === null){
            if (replyCheck.checked) {
                sessionStorage.setItem('tokenComment', generateToken(replyEmail));
            }
            let comment = `${replyName}:${replyText}`;
            if (localStorage.getItem('comments') === null){
                let allComments


            }
        } else {

        }


    };

    render() {
        let displayLanguage = languageSet();
        return (
            <div className='main_leavereply'>
                    <h3>{Lang[displayLanguage].reply_title}</h3>
                    <textarea id="replyText" placeholder={Lang[displayLanguage].reply_placeholder_yourtext} className='main_leavereply-textarea' />
                    <div className="main_leavereply-inputs">
                        <input id="replyName" type="text" placeholder={Lang[displayLanguage].reply_placeholder_yourname} className="main_leavereply-input" />
                        <input id="replyEmail" type="text" placeholder={Lang[displayLanguage].reply_placeholder_youremail} className="main_leavereply-input" />
                    </div>
                    <div className="main_leavereply-send">
                        <input id="replyChecked" type="checkbox" className="main_leavereply-checkbox"/>
                        {Lang[displayLanguage].reply_checkbox}<br/>
                        <button className="button button-accent" onClick={this.addComment}>{Lang[displayLanguage].reply_btn}</button>
                    </div>
            </div>
        )
    }
}

export default LeaveReply;
