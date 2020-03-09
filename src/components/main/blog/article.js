import React from "react";

class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <div className="main_articles-article col-sm-4">
                <img src={this.props.img} alt="userpic" className="main_articles-article-userpic"/>
                <h4 className="main_articles-article-title">{this.props.title}</h4>
                <p className="main_articles-article-description">{this.props.description}</p>
            </div>
        )
    }
}

export default Article;