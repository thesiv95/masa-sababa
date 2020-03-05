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
                        <Article/>
                        <Article/>
                        <Article/>
                    </div>
                    <div className="main_articles row">
                        <Article/>
                        <Article/>
                        <Article/>
                    </div>
                </div>

                <Breadcrumbs/>
            </main>
        )
    }
}

export default Blog;