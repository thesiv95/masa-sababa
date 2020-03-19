import React from "react";
import Lang from "../../i18n/lang";
import languageSet from "../../utilites/languageSet";
import {Link} from "react-router-dom";

class NotFound404 extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return (
            <div>
                <h2 className='main_header'>{Lang[displayLanguage].main_404_header}</h2>
                <div className="main_steps container">
                    <div className="row">
                        <div className="col-sm-offset-5">
                            <button className="button button-accent">
                                <Link to={'/'}>{Lang[displayLanguage].main_btn_gohome}</Link>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default NotFound404;