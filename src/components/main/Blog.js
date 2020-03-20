import React from "react";
import Article from "./Blog/Article";
import Breadcrumbs from "./Blog/Breadcrumbs";
import {baseUrl} from "../Constants";
import Lang from "./../../i18n/lang";
import languageSet from "../../utilites/languageSet";
import fetchErrorMessage from "../../utilites/fetchErrorMessage";

class Blog extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            lang: languageSet(),
            categories: []
        }
    }

    componentDidMount() {
        const categoriesLength = 8;
        let categories = [];
        fetch(`${baseUrl}/${this.state.lang}/category`)
            .then(res => res.json())
            .then(json => {

                for (let i = 0; i < categoriesLength; i++){
                    categories.push(json[i])
                }

                this.setState({
                    categories: categories
                })

            })
            .catch(e => fetchErrorMessage(e));
    }

    render() {
        let displayLanguage = languageSet();
        return (
            <div>
                <div className="main_fetcherror">
                </div>
                <h2 className="main_header">{Lang[displayLanguage].blog_header}</h2>
                <div className="main_blogcontainer container">
                    <div className="main_articles row">
                        <Article img='img/Ellipse 344.png' title={this.state.categories[0]} description={this.state.categories[0]} />
                        <Article img='img/Ellipse 345.png' title={this.state.categories[1]} description={this.state.categories[1]}/>
                        <Article img='img/Ellipse 347.png' title={this.state.categories[2]} description={this.state.categories[2]}/>
                    </div>
                    <div className="main_articles row">
                        <Article img='img/Ellipse 344.png' title={this.state.categories[3]} description={this.state.categories[3]}/>
                        <Article img='img/Ellipse 345.png' title={this.state.categories[4]} description={this.state.categories[4]}/>
                        <Article img='img/Ellipse 347.png' title={this.state.categories[5]} description={this.state.categories[5]}/>
                    </div>
                </div>

                <Breadcrumbs/>
            </div>
        )
    }
}

export default Blog;