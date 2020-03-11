import React from "react";
import Lang from "./../../../../i18n/lang";

class LeaveReply extends React.Component {
    render() {
        return (
            <div className='main_leavereply'>
                <textarea placeholder={Lang.ru.reply_placeholder_yourtext} />
                <input type="text" placeholder={Lang.ru.reply_placeholder_yourname} />
                <input type="text" placeholder={Lang.ru.reply_placeholder_youremail} />
                <input type="checkbox"/>
                {Lang.ru.reply_checkbox}
                <button className="button button-accent">{Lang.ru.reply_btn}</button>
            </div>
        )
    }
}

export default LeaveReply;
