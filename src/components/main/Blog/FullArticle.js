import React from "react";

class FullArticle extends React.Component {
    render() {
        return (
            <div>
                <h2 className="main_header article-header">How to get Teudat Zeut?</h2>
                <p className="main_articlesubheader">By Adam Adams November 17, 2019</p>
                <div className="main_articlecontent">
                    <div className="main_videocontainer">
                        <iframe className="main_video" src="https://www.youtube.com/embed/wPwZnpqZIk0" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </div>
                        <p>Watch our video tutorial. In it you will find a lot of useful information about how to get an ID card. Or read the detailed step-by-step guide below.</p>
                        <a href="#">Link sample</a>
                        <blockquote>
                            Blockquote sample
                        </blockquote>
                        <h3>Header sample</h3>
                        <ul>
                            <li>sample</li>
                            <li>sample</li>
                            <li>sample</li>
                            <li>sample</li>
                        </ul>
                </div>
                <div className="main_comments">
                    <div className="main_comments-comment">
                        <img src="" alt="" className="main_comments-comment-image"/>
                         <h5>Image</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default FullArticle;