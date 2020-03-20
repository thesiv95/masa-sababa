import React from "react";
import Lang from "./../../../i18n/lang"
import languageSet from "../../../utilites/languageSet";
import {NavLink} from "react-router-dom";

class Breadcrumbs extends React.Component {



    render() {
        let displayLanguage = languageSet();
        return (
            <div className="main_breadcrumbs">
                <NavLink to={'#prev'} className={'main_breadcrumbs-nav direction-page'} >{Lang[displayLanguage].breadcrumbs_previous}</NavLink>
                <NavLink to={'#1'} className={'main_breadcrumbs-nav'}>1</NavLink>
                <NavLink to={'#2'} className={'main_breadcrumbs-nav'}>2</NavLink>
                <NavLink to={'#3'} className={'main_breadcrumbs-nav'}>3</NavLink>
                <NavLink to={'#4'} className={'main_breadcrumbs-nav'}>4</NavLink>
                <NavLink to={'#5'} className={'main_breadcrumbs-nav'}>5</NavLink>
                <NavLink to={'#next'} className={'main_breadcrumbs-nav direction-page'} >{Lang[displayLanguage].breadcrumbs_next}</NavLink>
            </div>
        )
    }
}

export default Breadcrumbs;