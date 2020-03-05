import React from "react";

class Step extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="main_step step-pic-left col-sm-6">
                    <h3 className="main_step-number">Step 1</h3>
                    <h4 className="main_step-title">Teudat zeur</h4>
                    <p className="main_step-description">Identification card (Teudat Zeut) – upon your arrival
                        ill be advertised on the Ministry of Aliyah and Integration website.</p>
                </div>
                <div className="main_step step-pic-right col-sm-6">
                    <img src="img/steps/clip-bad-gateaway.png" alt="stepX" className="main_step-pic"/>
                </div>
            </div>
        )
    }
}

export default Step;