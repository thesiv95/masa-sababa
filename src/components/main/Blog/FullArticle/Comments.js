import React from "react";
import Lang from "./../../../../i18n/lang";
import languageSet from "../../../../utilites/languageSet";
import Comment from "./Comments/Comment";

class Comments extends React.Component {

    displayLanguage = languageSet();

    getCurrentFormattedDate = () => {
        const d = new Date();
        let day = d.getDate();
        // Get month string from i18n/lang.json
        let month = Lang[this.displayLanguage].blog_comments_month[d.getMonth().toString()];
        let year = d.getFullYear();
        return `${day} ${month} ${year}`;
    };

    getComments = () => {
       let comms = [];
        this.props.data.map((comment, index) =>
            comment.forEach(elem =>
                comms.push(
                    <Comment key={index}
                             name={elem.name}
                             text={elem.text}
                             date={this.getCurrentFormattedDate()}
                             avatarUrl={elem.avatarUrl}
                    />
                )
            ));
        return comms;
    };

    render() {
        // condition because props will come a bit later after page loaded (because data from db is fetching)
        if (this.props.data) {
            return (
                <div className="main__comments">
                    <h3>{Lang[this.displayLanguage].comments_title}</h3>
                    {this.getComments()}
                </div>
            );
        } else {
            return Lang[this.displayLanguage].comments_loading;
        }

    }
}

export default Comments;