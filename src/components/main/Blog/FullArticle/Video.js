import React from "react";

class Video extends React.Component{

    render() {
        return (
            <div className="main_videocontainer">
                <iframe className="main_video" src={`https://www.youtube.com/embed/${this.props.youtubeCode}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen title={'YouTube video'}/>
            </div>
        )
    }
}

export default Video;