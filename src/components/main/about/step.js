import React from 'react';
const baseUrl = 'https://olimshelper.herokuapp.com/';

class Step extends React.Component {

    constructor(props) {
        super(props);
        this.setState({
            lang: 'en',
            number: undefined,
            title: undefined,
            description: undefined
            // picture: undefined
        })
    }


    getSteps = (lang) => {
        fetch(baseUrl + lang)
            .then(res => res.json())
            .then(json => this.setState({
                lang: lang,
                number: json.steps.numberOfStep,
                title: json.steps.title,
                description: json.steps.description
            }))
    }

    render() {
        return (
            <div className="row">
                <div className="main_step step-pic-left col-sm-6">
                    <h3 className="main_step-number">Step {this.props.number}</h3>
                    <h4 className="main_step-title">{this.props.title}</h4>
                    <p className="main_step-description">{this.props.description}</p>
                </div>
                <div className="main_step step-pic-right col-sm-6">
                    <img src="img/steps/clip-bad-gateaway.png" alt="stepX" className="main_step-pic"/>
                </div>
            </div>
        )
    }
}

export default Step;