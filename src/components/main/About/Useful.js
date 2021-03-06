import React from "react";


class Useful extends React.Component {
    render() {
        return (
            <div className="main__articles_article col-sm-4">
                <img src={this.props.imgSrc} alt={this.props.imgAlt} className="main__articles_article-userpic"/>
                <h4 className="main__articles_article-title">{this.props.title}</h4>
                <p className="main__articles_article-description">
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.description}</a>
                </p>
            </div>
        )
    }
}

export default Useful;