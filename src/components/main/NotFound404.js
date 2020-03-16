import React from "react";
import Lang from "../../i18n/lang";
import languageSet from "../../utilites/languageSet";
import {NavLink} from "react-router-dom";

class NotFound404 extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return (
            <div>
                <h2 className='main_header'>{Lang[displayLanguage].main_404_header}</h2>
                <div className="main_steps container">
                    <div className="row">
                        <div className="col-sm-offset-5">
                            <NavLink to={'/'} className={'button button-accent'}>Go Home</NavLink>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default NotFound404;