import React from "react";
import Lang from "./../../../../i18n/lang";
import languageSet from "../../../../languageSet";

class Comments extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return (
            <div className="main_comments">
                <h3>{Lang[displayLanguage].comments_title}</h3>
                <div className="main_comments-comment container">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src="img/comment.png" alt="comment" className="main_comments-comment-image"/>
                        </div>
                        <div className="col-sm-9">
                            <h5>Carry Minati</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dignissimos laudantium porro tenetur ullam voluptatem voluptates.</p>
                            <a href="#reply"> {Lang[displayLanguage].comments_reply} <i>icon</i></a>
                            <p>15 June 2019</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comments;