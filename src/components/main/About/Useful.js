import React from "react";


class Useful extends React.Component {
    render() {
        return (
            <div className="main_articles-article col-sm-4">
                <img src={this.props.imgSrc} alt={this.props.imgAlt} className="main_articles-article-userpic"/>
                <h4 className="main_articles-article-title">{this.props.title}</h4>
                <p className="main_articles-article-description">
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.description}</a>
                </p>
            </div>
        )
    }
}

export default Useful;