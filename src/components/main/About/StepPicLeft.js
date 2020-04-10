import React from 'react';
import Lang from './../../../i18n/lang';
import languageSet from "../../../utilites/languageSet";
import {Link} from "react-router-dom";

class StepPicLeft extends React.Component {


    rememberMinistry(number){
        localStorage.setItem('targetMinistry', number.toString());
    }

    render() {
        let displayLanguage = languageSet();
        return (
            <div className="row">
                <div className="main__step col-sm-6">
                    <img src={this.props.img} alt={`step-${this.props.number}`} className="main__step_pic hidden-print"/>
                    <br/>
                    <p className="main__step_description need-description">{this.props.need !== "" ? this.props.need : ''}</p>

                </div>
                <div className="main__step col-sm-6" onClick={this.rememberMinistry(this.props.number)}>
                    <h3 className="main__step_number" >
                    <Link 
                        to={{
                            pathname: `/fullarticle`,
                            state: {
                                number:  this.props.number
                            }
                        }}
                        >
                            {Lang[displayLanguage].about_step} {this.props.number}
                        </Link>

                    </h3>
                    <h4 className="main__step_title">{this.props.title}</h4>
                     <p className="main__step_description">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default StepPicLeft;