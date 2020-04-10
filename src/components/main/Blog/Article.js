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
            <div className="main__articles_article col-sm-4">
                <NavLink to='/fullarticle'>
                <img src={this.props.img} alt="userpic" className="main__articles_article-userpic"/>
                <h4 className="main__articles_article-title">{this.props.title}</h4>
                <p className="main__articles_article-description">

                        {this.props.description}

                </p>
                </NavLink>
            </div>
        )
    }
}

export default Article;