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
                <div className="main__fetcherror">
                </div>
                <h2 className="main__header">{Lang[displayLanguage].blog_header}</h2>
                <div className="main__blogcontainer container">
                    <div className="main__articles row">
                        <Article img='img/beit-holim.jpg' title={this.state.categories[0]} description={Lang[displayLanguage].blog_frontarticles["0"]} />
                        <Article img='img/bank.jpg' title={this.state.categories[1]} description={Lang[displayLanguage].blog_frontarticles["1"]}/>
                        <Article img='img/merkaz-klita.jpg' title={this.state.categories[2]} description={Lang[displayLanguage].blog_frontarticles["2"]}/>
                    </div>
                    <div className="main__articles row">
                        <Article img='img/ministry_affairs.jpg' title={this.state.categories[3]} description={Lang[displayLanguage].blog_frontarticles["3"]}/>
                        <Article img='img/university.png' title={this.state.categories[4]} description={Lang[displayLanguage].blog_frontarticles["4"]}/>
                        <Article img='img/misrad-klita.jpg' title={this.state.categories[5]} description={Lang[displayLanguage].blog_frontarticles["5"]}/>
                    </div>
                </div>

                <Breadcrumbs/>
            </div>
        )
    }
}

export default Blog;