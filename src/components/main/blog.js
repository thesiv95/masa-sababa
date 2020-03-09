import React from "react";
import Article from "./blog/article";
import Breadcrumbs from "./blog/breadcrumbs";

class Blog extends React.Component{
    render() {
        return (
            <main className="main">
                <h2 className="main_header">Blog</h2>
                <div className="main_blogcontainer container">
                    <div className="main_articles row">
                        <Article img='' title='2' description='2' />
                        <Article img='' title='3' description='3'/>
                        <Article img='' title='4' description='4'/>
                    </div>
                    <div className="main_articles row">
                        <Article img='' title='6' description='6'/>
                        <Article img='' title='7' description='7'/>
                        <Article img='' title='8' description='8'/>
                    </div>
                </div>

                <Breadcrumbs/>
            </main>
        )
    }
}

export default Blog;