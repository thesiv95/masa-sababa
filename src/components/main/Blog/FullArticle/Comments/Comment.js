import React from "react";
import Lang from "../../../../../i18n/lang";
import languageSet from "../../../../../languageSet";

class Comment extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return (
            <div className="main_comments-comment container">
                <div className="row">
                    <div className="col-sm-1">
                        <img src="img/comment.png" alt="comment" className="main_comments-comment-image"/>
                    </div>
                    <div className="col-sm-8">
                        <h5>{this.props.name}</h5>
                        <p>{this.props.text}</p>
                        <a href="#reply"> {Lang[displayLanguage].comments_reply}
                            <img src="img/bootstrap-icons/reply-fill.svg" alt="reply" width="32" height="32"/>
                        </a>
                        <p>{this.props.date}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;