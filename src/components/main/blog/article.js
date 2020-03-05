import React from "react";

class Article extends React.Component {
    render() {
        return (
            <div className="main_articles-article col-sm-4">
                <img src="img/Ellipse 344.png" alt="userpic" className="main_articles-article-userpic"/>
                <h4 className="main_articles-article-title">Change the name</h4>
                <p className="main_articles-article-description">Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Quisquam, ab.</p>
            </div>
        )
    }
}

export default Article;