import React from "react";
import Lang from "./../../../../i18n/ru";

class LeaveReply extends React.Component {
    render() {
        return (
            <div className='main_leavereply'>
                <textarea placeholder={Lang.reply_placeholder_yourtext} />
                <input type="text" placeholder={Lang.reply_placeholder_yourname} />
                <input type="text" placeholder={Lang.reply_placeholder_youremail} />
                <input type="checkbox"/>
                {Lang.reply_checkbox}
                <button className="button button-accent">{Lang.reply_btn}</button>
            </div>
        )
    }
}

export default LeaveReply;
