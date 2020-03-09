import React from "react";
import Step from "./About/Step"
import Useful from "./About/Useful";

// TODO: вывод шагов через фетч
// через стейт переключать язык, и чтобы фетч проходил заново
// смотреть уроки и повторять, повторять


class About extends React.Component {
    render() {
        return (
            <div>
                <h2 className="main_header">About Repatriation</h2>
                <p className="main_description main_description-about">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to.</p>
                <div className="main_steps container">
                    <Step number='1' title='Step title' description='blabla' img=''/>
                    <Step number='2' title='Step title' description='blabla'  img=''/>
                    <Step number='3' title='Step title' description='blabla'  img=''/>
                    <Step number='4' title='Step title' description='blabla'  img=''/>
                    <Step number='5' title='Step title' description='blabla'  img=''/>
                    <Step number='6' title='Step title' description='blabla'  img=''/>
                    <Step number='7' title='Step title' description='blabla' img=''/>
                </div>
                {/* 3 */}
                <div className="main_showmore">
                    <a href="#" className="main_showmore-link">
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