import React from "react";

import StepPicLeft from "./About/StepPicLeft";
import StepPicRight from "./About/StepPicRight";

import Useful from "./About/Useful";
import {baseUrl} from "../Constants";
import Lang from "./../../i18n/ru"



// TODO: привязать выпадашку

class About extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            lang: 'ru',
            stepsTitles: [],
            stepsDesc: [],
            stepsNeed: []
        }
    }

    componentDidMount() {
        let stepsNumbers = 9;
        let tempTitles = [];
        let tempDesc = [];
        let tempNeed = [];
        fetch(`${baseUrl}${this.state.lang}`)
            .then(res => res.json())
            .then(json => {
                console.log(json);

                for (let i = 0; i < stepsNumbers; i++) {
                    tempTitles.push(json.steps[i].title);
                    tempDesc.push(json.steps[i].description)
                    tempNeed.push(json.steps[i].need)
                }
                this.setState({
                    stepsTitles: tempTitles,
                    stepsDesc: tempDesc,
                    stepsNeed: tempNeed
                });
            });


    }



    render() {
      //  console.log(this.state.stepsTitles);
        return (
            <div>
                <h2 className="main_header">{Lang.about_header_partleft}
                    &nbsp;<span>{Lang.about_header_partright}</span>
                </h2>
                <p className="main_description main_description-about">
                    {Lang.about_description}
                </p>
                <div className="main_steps container">
                    <StepPicLeft number='1' title={this.state.stepsTitles[0]} description={this.state.stepsDesc[0]} need={this.state.stepsNeed[0]} img='img/steps/clip-bad-gateaway.png' />
                    <StepPicRight number='2' title={this.state.stepsTitles[1]} description={this.state.stepsDesc[1]} need={this.state.stepsNeed[1]} img='img/steps/clip-payment.png' />
                    <StepPicLeft number='3' title={this.state.stepsTitles[2]} description={this.state.stepsDesc[2]} need={this.state.stepsDesc[2]} img='img/steps/clip-welcome.png'/>
                    <StepPicRight number='4' title={this.state.stepsTitles[3]} description={this.state.stepsDesc[3]} need={this.state.stepsDesc[3]} img='img/steps/clip.png'/>
                    <StepPicLeft number='5' title={this.state.stepsTitles[4]} description={this.state.stepsDesc[4]} need={this.state.stepsDesc[4]} img='img/steps/clip-sign-up.png'/>
                    <StepPicRight number='6' title={this.state.stepsTitles[5]} description={this.state.stepsDesc[5]} need={this.state.stepsDesc[5]} img='img/steps/clip-travel.png'/>
                    <StepPicLeft number='7' title={this.state.stepsTitles[6]} description={this.state.stepsDesc[6]} need={this.state.stepsDesc[6]} img='img/steps/clip-no-messages.png'/>
                    <StepPicRight number='8' title={this.state.stepsTitles[7]} description={this.state.stepsDesc[7]} need={this.state.stepsDesc[7]} img='img/steps/clip-list-is-empty.png'/>
                    <StepPicLeft number='9' title={this.state.stepsTitles[8]} description={this.state.stepsDesc[8]} need={this.state.stepsDesc[8]} img='img/steps/clip-waiting.png'/>
                </div>
                {/* 3 */}
                <div className="main_showmore">
                    <a href="/more" className="main_showmore-link">
                        <img className="main_showmore-image" src="img/bootstrap-icons/chevron-compact-down.svg"
                             alt="&#8595;" width="32" height="32" title="Bootstrap"/>
                        Show more
                    </a>
                </div>
                {/* 3 */}
                <div className="main_useful">
                    <h4 className="main_useful-title">{Lang.about_usefularticles_title}</h4>
                    <div className="main_articles container">
                        <div className="row">
                            <Useful/>
                            <Useful/>
                            <Useful/>
                        </div>
                    </div>
                    <div className="main_useful-navigation">
                        <button className="button button-nav">&#8592;</button>
                        <button className="button button-nav">&#8594;</button>
                    </div>
                </div>
            </div>
        )
    }

}


export default About;