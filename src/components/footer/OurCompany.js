import React from "react";
import {NavLink} from "react-router-dom";

class OurCompany extends React.Component {
    render() {
        return(
            <div className="footer_block col-xs-3">
                <h4 className="footer_title">Our Company</h4>
                <p>
                    <NavLink to="/about" className="footer_link">About</NavLink>
                </p>
                <p>
                    <NavLink to="/blog" className="footer_link">Blog</NavLink>
                </p>
            </div>
        )
    }
}

export default OurCompany;