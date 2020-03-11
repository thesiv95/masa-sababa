import React from "react";
import Lang from "./../../../../i18n/lang";
import languageSet from "../../../../languageSet";


class LeaveReply extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return (
            <div className='main_leavereply'>
                <textarea placeholder={Lang[displayLanguage].reply_placeholder_yourtext} />
                <input type="text" placeholder={Lang[displayLanguage].reply_placeholder_yourname} />
                <input type="text" placeholder={Lang[displayLanguage].reply_placeholder_youremail} />
                <input type="checkbox"/>
                {Lang[displayLanguage].reply_checkbox}
                <button className="button button-accent">{Lang[displayLanguage].reply_btn}</button>
            </div>
        )
    }
}

export default LeaveReply;
