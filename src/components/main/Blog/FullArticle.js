import React from "react";

import Map from "./FullArticle/Map";
import Comments from "./FullArticle/Comments";
import LeaveReply from "./FullArticle/LeaveReply";
import Ministries from "./FullArticle/Ministries";
import Video from "./FullArticle/Video";
import Lang from "./../../../i18n/lang";


class FullArticle extends React.Component {
    render() {
        return (
            <div>
                <h2 className="main_header article-header">{Lang.ru.blog_teudatzeut_title}</h2>
                <p className="main_articlesubheader">By Adam Adams November 17, 2019</p>
                <div className="main_articlecontent">
                    <Video youtubeCode="wPwZnpqZIk0" />
                    <p>{Lang.ru.blog_teudatzeut_description}</p>
                    <blockquote>
                        {Lang.ru.blog_teudatzeut_blockquote}
                    </blockquote>
                    <Map/>
                    <Ministries/>
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
