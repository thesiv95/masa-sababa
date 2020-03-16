import React from "react";
import Lang from "./../../../../i18n/lang";
import languageSet from "../../../../utilites/languageSet";


class LeaveReply extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return (
            <div className='main_leavereply'>
                    <h3>{Lang[displayLanguage].reply_title}</h3>
                    <textarea placeholder={Lang[displayLanguage].reply_placeholder_yourtext} className='main_leavereply-textarea' />
                    <div className="main_leavereply-inputs">
                        <input type="text" placeholder={Lang[displayLanguage].reply_placeholder_yourname} className="main_leavereply-input" />
                        <input type="text" placeholder={Lang[displayLanguage].reply_placeholder_youremail} className="main_leavereply-input" />
                    </div>
                    <div className="main_leavereply-send">
                        <input type="checkbox" className="main_leavereply-checkbox"/>
                        {Lang[displayLanguage].reply_checkbox}<br/>
                        <button className="button button-accent">{Lang[displayLanguage].reply_btn}</button>
                    </div>
            </div>
        )
    }
}

export default LeaveReply;
