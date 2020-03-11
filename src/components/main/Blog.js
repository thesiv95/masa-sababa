import React from "react";
import Article from "./Blog/Article";
import Breadcrumbs from "./Blog/Breadcrumbs";
import {baseUrl} from "../Constants";
import Lang from "./../../i18n/ru";

const categoriesLength = 8;
let categories = [];


function getCategories(displayLanguage) {
    fetch(`${baseUrl}${displayLanguage}/category`)
        .then(res => res.json())
        .then(json => {

            for (let i = 0; i < categoriesLength; i++){
                categories.push(json[i])
            }

        })
}

getCategories('ru');

class Blog extends React.Component{
    render() {
        return (
            <div>
                <h2 className="main_header">{Lang.blog_header}</h2>
                <div className="main_blogcontainer container">
                    <div className="main_articles row">
                        <Article img='img/Ellipse 344.png' title={categories[0]} description={categories[0]} />
                        <Article img='img/Ellipse 345.png' title={categories[1]} description={categories[1]}/>
                        <Article img='img/Ellipse 347.png' title={categories[2]} description={categories[2]}/>
                    </div>
                    <div className="main_articles row">
                        <Article img='img/Ellipse 344.png' title={categories[3]} description={categories[3]}/>
                        <Article img='img/Ellipse 345.png' title={categories[4]} description={categories[4]}/>
                        <Article img='img/Ellipse 347.png' title={categories[5]} description={categories[5]}/>
                    </div>
                </div>

                <Breadcrumbs/>
            </div>
        )
    }
}

export default Blog;