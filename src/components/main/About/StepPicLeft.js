import React from 'react';

class StepPicLeft extends React.Component {

     render() {
        return (
            <div className="row">
                <div className="main_step col-sm-6">
                    <img src={this.props.img} alt={`step-${this.props.number}`} className="main_step-pic"/>
                    {this.props.need !== "" ? `<p>${this.props.need}</p>` : ''}
                </div>
                <div className="main_step col-sm-6">
                    <h3 className="main_step-number">Step {this.props.number}</h3>
                    <h4 className="main_step-title">{this.props.title}</h4>
                    <p className="main_step-description">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default StepPicLeft;