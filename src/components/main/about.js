import React from "react";
import Step from "./about/step"
import Useful from "./about/useful";
// TODO: переключение страниц (?)
// TODO: вывод шагов через фетч
class About extends React.Component {
    render() {
        return (
            <main className="main">
                <h2 className="main_header">About Repatriation</h2>
                <p className="main_description main_description-about">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to.</p>
                <div className="main_steps container">
                    <Step/>
                    <Step/>
                    <Step/>
                </div>
                <div className="main_showmore">
                    <a href="#" className="main_showmore-link">
                        <img className="main_showmore-image" src="img/bootstrap-icons/chevron-compact-down.svg"
                             alt="&#8595;" width="32" height="32" title="Bootstrap"/>
                            Show more
                    </a>
                </div>

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
            </main>
        )
    }
}

export default About;