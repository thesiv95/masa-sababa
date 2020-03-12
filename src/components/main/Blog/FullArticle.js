import React from "react";

import Map from "./FullArticle/Map";
import Comments from "./FullArticle/Comments";
import LeaveReply from "./FullArticle/LeaveReply";
import Ministries from "./FullArticle/Ministries";
import Video from "./FullArticle/Video";
import Lang from "./../../../i18n/lang";
import languageSet from "../../../languageSet";


class FullArticle extends React.Component {

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let displayLanguage = languageSet()
        return (
            <div>
                <h2 className="main_header article-header">{Lang[displayLanguage].blog_teudatzeut_title}</h2>
                <p className="main_articlesubheader">By Adam Adams November 17, 2019</p>
                <div className="main_articlecontent">
                    <Video youtubeCode="wPwZnpqZIk0" />
                    <p>{Lang[displayLanguage].blog_teudatzeut_description}</p>
                    <blockquote>
                        {Lang[displayLanguage].blog_teudatzeut_blockquote}
                    </blockquote>
                    <Map/>
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
