import React from 'react';
import Lang from './../../../i18n/lang';
import languageSet from "../../../utilites/languageSet";
import {Link} from "react-router-dom";

class StepPicRight extends React.Component {

    rememberMinistry(number){
        localStorage.setItem('targetMinistry', number.toString());
    }

    render() {
        let displayLanguage = languageSet();
        return (
            <div className="row">
                <div className="main_step col-sm-6" onClick={this.rememberMinistry(this.props.number)}>
                    <h3 className="main_step-number" >
                        <Link to='/fullarticle' >
                            {Lang[displayLanguage].about_step} {this.props.number}
                        </Link>

                    </h3>
                    <h4 className="main_step-title">{this.props.title}</h4>
                    <p className="main_step-description">{this.props.description}</p>
                </div>
                <div className="main_step col-sm-6">
                    <img src={this.props.img} alt={`step-${this.props.number}`} className="main_step-pic"/>
                    <p className="main_step-description need-description">{this.props.need !== "" ? this.props.need : ''}</p>

                </div>
            </div>
        )
    }
}

export default StepPicRight;