import React from "react";
import Article from "./Blog/Article";
import Breadcrumbs from "./Blog/Breadcrumbs";

class Blog extends React.Component{
    render() {
        return (
            <div>
                <h2 className="main_header">Blog</h2>
                <div className="main_blogcontainer container">
                    <div className="main_articles row">
                        <Article img='img/Ellipse 344.png' title='2' description='2' />
                        <Article img='img/Ellipse 345.png' title='3' description='3'/>
                        <Article img='img/Ellipse 346.png' title='4' description='4'/>
                    </div>
                    <div className="main_articles row">
                        <Article img='img/Ellipse 345.png' title='6' description='6'/>
                        <Article img='img/Ellipse 346.png' title='7' description='7'/>
                        <Article img='img/Ellipse 345.png' title='8' description='8'/>
                    </div>
                </div>

                <Breadcrumbs/>
            </div>
        )
    }
}

export default Blog;