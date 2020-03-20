import React from "react";
import Lang from "./../../../../i18n/lang";
import languageSet from "../../../../utilites/languageSet";
import commentsJSON from "./commentsJSON";
import Comment from "./Comments/Comment";

class Comments extends React.Component {

    /*

    name:text:date,name:text:date

     */

    getAllComments = () => {
        if (sessionStorage.getItem('token') !== null){
            if (localStorage.getItem('comments') !== null){
                return localStorage.getItem('comments');
            }
        }
    };


    getCurrentFormattedDate = () => {
        let displayLanguage = languageSet();
        const d = new Date();
        let day = d.getDate();
        let month = 0;
        switch (d.getMonth()) {
            case 0:
                month = Lang[displayLanguage].blog_comments_month['0'];
                break;
            case 1:
                month = Lang[displayLanguage].blog_comments_month['1'];
                break;
            case 2:
                month = Lang[displayLanguage].blog_comments_month['2'];
                break;
            case 3:
                month = Lang[displayLanguage].blog_comments_month['3'];
                break;
            case 4:
                month = Lang[displayLanguage].blog_comments_month['4'];
                break;
            case 5:
                month = Lang[displayLanguage].blog_comments_month['5'];
                break;
            case 6:
                month = Lang[displayLanguage].blog_comments_month['6'];
                break;
            case 7:
                month = Lang[displayLanguage].blog_comments_month['7'];
                break;
            case 8:
                month = Lang[displayLanguage].blog_comments_month['8'];
                break;
            case 9:
                month = Lang[displayLanguage].blog_comments_month['9'];
                break;
            case 10:
                month = Lang[displayLanguage].blog_comments_month['10'];
                break;
            case 11:
                month = Lang[displayLanguage].blog_comments_month['11'];
                break;
            default:
                month = Lang[displayLanguage].blog_comments_month['0'];
        }
        let year = d.getFullYear();
        return `${day} ${month} ${year}`;
    }

    render() {
        let displayLanguage = languageSet();
        //let allComments = this.getAllComments();
        return (
            <div className="main_comments">
                <h3>{Lang[displayLanguage].comments_title}</h3>
                <Comment name={commentsJSON["0"].name} text={commentsJSON["0"].text} date={this.getCurrentFormattedDate()}/>
                <Comment name={commentsJSON["1"].name} text={commentsJSON["1"].text} date={this.getCurrentFormattedDate()}/>
                <Comment name={commentsJSON["2"].name} text={commentsJSON["2"].text} date={this.getCurrentFormattedDate()}/>
            </div>
        )
    }
}

export default Comments;