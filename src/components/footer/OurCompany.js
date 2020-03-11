import React from "react";
import {NavLink} from "react-router-dom";
import Lang from "./../../i18n/ru";

class OurCompany extends React.Component {
    render() {
        return(
            <div className="footer_block col-xs-3">
                <h4 className="footer_title">{Lang.footer_ourcompany_title}</h4>
                <p>
                    <NavLink to="/about" className="footer_link">{Lang.footer_ourcompany_about}</NavLink>
                </p>
                <p>
                    <NavLink to="/blog" className="footer_link">{Lang.footer_ourcompany_blog}</NavLink>
                </p>
            </div>
        )
    }
}

export default OurCompany;