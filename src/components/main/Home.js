import React from "react";
import Lang from "./../../i18n/lang"
import languageSet from "../../utilites/languageSet";
import {Link} from "react-router-dom";


class Home extends React.Component {
    render() {
        // Language pick
        let displayLang = languageSet();
        return(
            <div>
                <h2 className="main__header">{Lang[displayLang].main_header}</h2>
                <p className="main__subheader">{Lang[displayLang].main_subheader}</p>
                <p className="main__description">{Lang[displayLang].main_description}</p>
                <div className="main__buttons hidden-print">
                    <button className="button button-accent button-margin">
                        <Link to={'/login'}>
                            {Lang[displayLang].main_btn_signup}
                        </Link>
                    </button>
                    <button className="button button-margin">
                        <Link to={'/'}>
                            {Lang[displayLang].main_btn_gohome}
                        </Link>
                    </button>
                </div>
                <div className="main__pic hidden-print">
                    <img src="img/clip-2.png" alt="main pic" className="main__pic-image img-fluid"/>
                </div>
            </div>
        )
    }
}

export default Home;