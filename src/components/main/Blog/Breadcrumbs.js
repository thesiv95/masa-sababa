import React from "react";
import Lang from "./../../../i18n/lang"
import languageSet from "../../../utilites/languageSet";

class Breadcrumbs extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return (
            <div className="main_breadcrumbs">
                <a href="#prev" className="main_breadcrumbs-nav direction-page">{Lang[displayLanguage].breadcrumbs_previous}</a>
                <a href="#1" className="main_breadcrumbs-nav active-page">1</a>
                <a href="#2" className="main_breadcrumbs-nav">2</a>
                <a href="#3" className="main_breadcrumbs-nav">3</a>
                <a href="#4" className="main_breadcrumbs-nav">4</a>
                <a href="#5" className="main_breadcrumbs-nav">5</a>
                <a href="#next" className="main_breadcrumbs-nav direction-page">{Lang[displayLanguage].breadcrumbs_next}</a>
            </div>
        )
    }
}

export default Breadcrumbs;