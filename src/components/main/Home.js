import React from "react";
import Lang from "./../../i18n/ru"

class Home extends React.Component {
    render() {
        return(
            <div>
                <h2 className="main_header">{Lang.main_header}</h2>
                <p className="main_subheader">{Lang.main_subheader}</p>
                <p className="main_description">{Lang.main_description}</p>
                <div className="main_buttons">
                    <button className="button button-accent button-margin">{Lang.main_btn_signup}</button>
                    <button className="button button-margin">{Lang.main_btn_gohome}</button>
                </div>
                <div className="main_pic">
                    <img src="img/clip-2.png" alt="main pic" className="main_pic-image img-fluid"/>
                    <img src="img/Rectangle 365.svg" alt="gradient" className="main_pic-gradient img-fluid"/>
                </div>
            </div>
        )
    }
}

export default Home;