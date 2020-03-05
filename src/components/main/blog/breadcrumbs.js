import React from "react";

class Breadcrumbs extends React.Component {
    render() {
        return (
            <div className="main_breadcrumbs">
                <a href="5.html" className="main_breadcrumbs-nav direction-page">Previous</a>
                <a href="5.html" className="main_breadcrumbs-nav active-page">1</a>
                <a href="5.html" className="main_breadcrumbs-nav">2</a>
                <a href="5.html" className="main_breadcrumbs-nav">3</a>
                <a href="5.html" className="main_breadcrumbs-nav">4</a>
                <a href="5.html" className="main_breadcrumbs-nav">5</a>
                <a href="5.html" className="main_breadcrumbs-nav direction-page">Next</a>
            </div>
        )
    }
}

export default Breadcrumbs;