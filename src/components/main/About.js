import React from "react";
import StepPicLeft from "./About/StepPicLeft";
import StepPicRight from "./About/StepPicRight";
import Useful from "./About/Useful";
import {baseUrl} from "../Constants";


// TODO: через стейт переключать язык, и чтобы фетч проходил заново
// TODO: ??? как подключить json-файлы

let targetLanguage = 'ru';

// let displayConstants = [];

const stepsNumbers = 9;
let stepsTitles = [];
let stepsDesc = [];


const getSteps = (displayLanguage) => {
    fetch(`${baseUrl}${displayLanguage}`)
        .then(res => res.json())
        .then(json => {

            for (let i = 0; i < stepsNumbers; i++){
                stepsTitles.push(json.steps[i].title);
                stepsDesc.push(json.steps[i].description)
            }
        })
};
getSteps(targetLanguage);


class About extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         stepInfo: {
    //             number: 1,
    //             title: undefined,
    //             description: undefined
    //         }
    //     }
    // }

    // getSteps = (displayLanguage) => {
    //     fetch(`${baseUrl}${displayLanguage}`)
    //         .then(res => res.json())
    //         .then(json => console.log(json))
    //
    //     };



    render() {
        return (
            <div>
                <h2 className="main_header">About Repatriation</h2>
                <p className="main_description main_description-about">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to.</p>
                <div className="main_steps container">
                    <StepPicLeft number='1' title={stepsTitles[0]} description={stepsDesc[0]} img='img/steps/clip-bad-gateaway.png'/>
                    <StepPicRight number='2' title={stepsTitles[1]} description={stepsDesc[1]} img='img/steps/clip-payment.png'/>
                    <StepPicLeft number='3' title={stepsTitles[2]} description={stepsDesc[2]} img='img/steps/clip-welcome.png'/>
                    <StepPicRight number='4' title={stepsTitles[3]} description={stepsDesc[3]} img='img/steps/clip.png'/>
                    <StepPicLeft number='5' title={stepsTitles[4]} description={stepsDesc[4]} img='img/steps/clip-sign-up.png'/>
                    <StepPicRight number='6' title={stepsTitles[5]} description={stepsDesc[5]} img='img/steps/clip-travel.png'/>
                    <StepPicLeft number='7' title={stepsTitles[6]} description={stepsDesc[6]} img='img/steps/clip-no-messages.png'/>
                    <StepPicRight number='8' title={stepsTitles[7]} description={stepsDesc[7]} img='img/steps/clip-list-is-empty.png'/>
                    <StepPicLeft number='9' title={stepsTitles[8]} description={stepsDesc[8]} img='img/steps/clip-waiting.png'/>
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
                    <h4 className="main_useful-title">Useful articles for you</h4>
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