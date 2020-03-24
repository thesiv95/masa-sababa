import React from "react";

import StepPicLeft from "./About/StepPicLeft";
import StepPicRight from "./About/StepPicRight";

import Useful from "./About/Useful";
import {baseUrl} from "../Constants";
import Lang from "./../../i18n/lang";

import usefulArticles from "./About/usefulArticles";

import languageSet from "../../utilites/languageSet";
import fetchErrorMessage from "../../utilites/fetchErrorMessage";

class About extends React.Component {

    showMoreImg;
    showMoreOpened;
    descriptionBlocks = [];
    blocksAreShown;
    showMoreText;
    toggleText;
    articles;
    displayLanguage = languageSet();


    constructor(props) {
        super(props);
        this.state = {
            lang: languageSet(),
            stepsTitles: [],
            stepsDesc: [],
            stepsNeed: []
        }
    }

    // 18 - desc. length, could only hardcode =/
    toggleBlock = (event) => {
        event.preventDefault();
        if (!this.blocksAreShown){
            this.blocksAreShown = true;
            for (let i = 0; i < 18; i++){
                this.descriptionBlocks[i].style.display = 'block';
            }
            this.toggleText.innerHTML = Lang[this.displayLanguage].about_lessdetails;

        } else {
            this.blocksAreShown = false;
            for (let i = 0; i < 18; i++){
                this.descriptionBlocks[i].style.display = 'none';
            }
            this.toggleText.innerHTML = Lang[this.displayLanguage].about_moredetails;
        }
    };

    toggleShowMore = (event) => {
        event.preventDefault();
        if (!this.showMoreOpened){
            this.showMoreOpened = true;
            this.showMoreImg.src = "img/bootstrap-icons/chevron-compact-up.svg";
            for (let i = 3; i <= 8; i++){
                this.articles[i].style.display = 'block';
            }
            this.showMoreText.innerHTML = Lang[this.displayLanguage].about_showless;
        } else {
            this.showMoreOpened = false;
            this.showMoreImg.src = "img/bootstrap-icons/chevron-compact-down.svg";
            for (let i = 3; i <= 8; i++){
                this.articles[i].style.display = 'none';
            }
            this.showMoreText.innerHTML = Lang[this.displayLanguage].about_showmore;
        }
    };

    componentDidMount() {
        localStorage.removeItem('targetMinistry'); // reset number which we pass to fullArticle
        this.descriptionBlocks = document.querySelectorAll('.main_step-description');
        this.blocksAreShown = false;
        this.showMoreImg = document.querySelector('#showMoreImg');
        this.showMoreImg.src = "img/bootstrap-icons/chevron-compact-down.svg";
        this.showMoreOpened = false;
        this.showMoreText = document.querySelector('#showMoreText');
        this.toggleText = document.querySelector('#toggleText');
        this.articles = document.querySelectorAll('.main_steps .row');
        for (let i = 3; i <= 8; i++){
            this.articles[i].style.display = 'none';
        }
        let stepsNumbers = 9;
        let tempTitles = [];
        let tempDesc = [];
        let tempNeed = [];
        fetch(`${baseUrl}/${this.state.lang}`)
            .then(res => res.json())
            .then(json => {


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
            })
            .catch(e => fetchErrorMessage(e));
    }



    render() {
        // Language pick
        let displayLanguage = this.displayLanguage;
        return (
            <div>
                <div className="main_fetcherror">
                </div>
                <h2 className="main_header">{Lang[displayLanguage].about_header_partleft}
                    &nbsp;<span className="main_header-about-subheader">{Lang[displayLanguage].about_header_partright}</span>
                </h2>
                <p className="main_description main_description-about">
                    {Lang[displayLanguage].about_description}
                </p>
                <p className="main_description main_description_margin">
                    <img src="img/bootstrap-icons/info.svg" alt="[pic]" width="32" height="32" />
                    <a href="/#toggle" className="main_showmore-link showmore-margin" id="toggleText" onClick={this.toggleBlock}>{Lang[displayLanguage].about_moredetails}</a>
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

                <div className="main_showmore">
                    <a href="/#more" onClick={this.toggleShowMore} className="main_showmore-link">
                        <img className="main_showmore-image" id="showMoreImg" src="img/bootstrap-icons/chevron-compact-down.svg"
                             alt="&#8595;" width="32" height="32" />
                        <span id="showMoreText">{Lang[displayLanguage].about_showmore}</span>
                    </a>
                </div>

                <div className="main_useful">
                    <h4 className="main_useful-title">{Lang[displayLanguage].about_usefularticles_title}</h4>
                    <div className="main_articles container">
                        <div className="row">
                            <Useful imgSrc={usefulArticles["1"].imgSrc} imgAlt={usefulArticles["1"].imgAlt} title={usefulArticles["1"].title} description={usefulArticles["1"].description} url={usefulArticles["1"].url} />
                            <Useful imgSrc={usefulArticles["2"].imgSrc} imgAlt={usefulArticles["2"].imgAlt} title={usefulArticles["2"].title} description={usefulArticles["2"].description} url={usefulArticles["2"].url} />
                            <Useful imgSrc={usefulArticles["3"].imgSrc} imgAlt={usefulArticles["3"].imgAlt} title={usefulArticles["3"].title} description={usefulArticles["3"].description} url={usefulArticles["3"].url} />
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