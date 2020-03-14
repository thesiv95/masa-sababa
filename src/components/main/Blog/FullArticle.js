import React from "react";

import Map from "./FullArticle/Map";
import Comments from "./FullArticle/Comments";
import LeaveReply from "./FullArticle/LeaveReply";
import Ministries from "./FullArticle/Ministries";
import Video from "./FullArticle/Video";
import Lang from "./../../../i18n/lang";
import languageSet from "../../../languageSet";


class FullArticle extends React.Component {

    displayLanguage = languageSet();

    componentWillUnmount() {
        this._isMounted = false;
    }

    dateFormatted(){
        let month = this.props.month;
        let monthString = Lang[this.displayLanguage].blog_comments_month[month];
        switch (this.displayLanguage) {
            case 'en':
                return `By ${this.props.author} ${monthString} ${this.props.day}, ${this.props.year}`;
            case 'ru':
                return `Автор: ${this.props.author} Дата: ${this.props.day} ${monthString} ${this.props.year}`;
            case 'he':
                return `${this.props.author} ${monthString} ${this.props.day}, ${this.props.year}על ידי `;
            case 'fr':
                return `Par ${this.props.author} ${monthString} ${this.props.day}, ${this.props.year}`;
            default:
                return `[Language file not set, contact the website administrator]`;
        }
    }

    render() {
        let displayLanguage = this.displayLanguage;
        return (
            <div>
                <h2 className="main_header article-header">{Lang[displayLanguage].blog_teudatzeut_title}</h2>
                <p className="main_articlesubheader">
                    {this.dateFormatted()}
                </p>
                <div className="main_articlecontent">
                    <Video youtubeCode="wPwZnpqZIk0" />
                    <p>{Lang[displayLanguage].blog_teudatzeut_description}</p>
                    <blockquote>
                        {Lang[displayLanguage].blog_teudatzeut_blockquote}
                    </blockquote>
                    <Map/>
                    {/*todo: выпадашка которая переключает индекс*/}
                    <select className="main_ministriespicker">
                        <option value="1">Для получения теу</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <Ministries placeIndex={'2'} lat={'32.7895852'} lon={'34.9864697'} radius={'50'} />
                </div>
                <Comments/>
                <LeaveReply/>

            </div>
        )
    }
}


export default FullArticle;


// TODO: кнопки профиль и логаут
// TODO: ссылка для категории(!)
// TODO: завершить стилизацию
