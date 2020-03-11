import React from "react";
import {NavLink} from "react-router-dom";

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
                <p className="main_articles-article-description">
                    <NavLink to='/fullarticle'>
                        {this.props.description}
                    </NavLink>
                </p>
            </div>
        )
    }
}

export default Article;