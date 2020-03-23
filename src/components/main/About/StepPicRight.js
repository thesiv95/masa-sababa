import React from 'react';
import Lang from './../../../i18n/lang';
import languageSet from "../../../utilites/languageSet";

class StepPicRight extends React.Component {

    render() {
        let displayLanguage = languageSet();
        return (
            <div className="row">
                <div className="main_step col-sm-6">
                    <h3 className="main_step-number">{Lang[displayLanguage].about_step} {this.props.number}</h3>
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