import React from "react";
import Lang from "../../../../../i18n/lang";
import languageSet from "../../../../../utilites/languageSet";
import fire from "../../../../../database/fire";

class Comment extends React.Component {

    deleteComment = (event) => {
        event.preventDefault();
        // We will hardcode id 2 at this point
        fire.database().ref('/comments/2')
            .remove()
            .then(result => console.log(result))
            .catch(error => console.log(error));
        let parent = event.target.parentElement.parentElement;
        parent.style.display = 'none';
    };

    render() {
        let displayLanguage = languageSet();
        return (
            <div className="main_comments-comment">
                <div className="row">
                    <div className="col-sm-2 main_comments-comment-leftpart">
                        <img src={this.props.avatarUrl} alt="comment" className="main_comments-comment-image"/>
                    </div>
                    <div className="col-sm-10 main_comments-comment-rightpart">
                        <h5>{this.props.name}</h5>
                        <p>{this.props.text}</p>
                        <a href="#reply" className='main_showmore-link'> {Lang[displayLanguage].comments_reply}
                            <img src="img/bootstrap-icons/reply-fill.svg" alt="reply" width="32" height="32"/>
                        </a>
                        <a href="#delete" className='main_showmore-link showmore-margin' onClick={this.deleteComment}>
                            {Lang[displayLanguage].comments_delete}
                        </a>
                        <p>{this.props.date}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment;