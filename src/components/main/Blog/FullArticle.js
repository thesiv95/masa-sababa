import React from "react";

import Map from "./FullArticle/Map";
import Comments from "./FullArticle/Comments";
import LeaveReply from "./FullArticle/LeaveReply";
import Ministries from "./FullArticle/Ministries";
import Video from "./FullArticle/Video";
import Lang from "./../../../i18n/lang";
import Cities from "./allCities.json"; // cities list
import languageSet from "../../../utilites/languageSet";
import dateAndAuthorFormatted from "../../../utilites/dateAndAuthorFormatted";



class FullArticle extends React.Component {

    displayLanguage = languageSet();
    allCities = [];
    temp = [];
    targetMinistry = 1; // we load 1st option of ministries 'select' tag by default

    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            placeIds: [],
            placeIndex: 1,
            city: 'Tel Aviv',
            latitude: 32.7895852,
            longitude: 34.9864697,
            radius: 50
        };
    }

    dateFormattedString = dateAndAuthorFormatted(this.props.day, this.props.month, this.props.year, 'Moshe Dayan');

    componentWillMount() {

        this.allCities = Object.values(Cities[this.displayLanguage]);
        for (let i in this.allCities){
            this.temp.push(<option>{this.allCities[i]}</option>);
        }

      /*  if (localStorage.getItem('targetMinistry') !== null){
            this.targetMinistry = parseInt(localStorage.getItem('targetMinistry'));
        }*/

    }

   // todo: почему то не работает локал сторадж (не перезаписывается значение targetMinistry)

    loadMinistriesComponent = () => {
        if (this.state.placeIndex > 0) {
            return <Ministries
                city={this.state.city}
                placeIndex={this.state.placeIndex}
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                radius={this.state.radius}/>
        } else {
            return "Loading...";
        }
    };


    render() {
        let displayLanguage = this.displayLanguage;
        if (localStorage.getItem('targetMinistry') !== null){
            this.targetMinistry = parseInt(localStorage.getItem('targetMinistry'));
        }
        return (
            <div>
                <div className="main_fetcherror">
                </div>
                <h2 className="main_header article-header">{Lang[displayLanguage].blog_teudatzeut_title}</h2>
                <p className="main_articlesubheader text-center">
                    {this.dateFormattedString}
                </p>
                <div className="main_articlecontent">
                    <Video youtubeCode="wPwZnpqZIk0"/>
                    <p className="text-center">{Lang[displayLanguage].blog_teudatzeut_description}</p>
                    <blockquote>
                        {Lang[displayLanguage].blog_teudatzeut_blockquote}
                    </blockquote>
                    <Map/>

                    <div className="main_ministrieschange container">
                        <div className="row">
                            <div className="main_ministrieschange_item col-sm-6">
                                {Lang[displayLanguage].blog_ministry_prompt}
                                <select className="main_ministrieschange-select" onChange={event => {
                                    let newState = event.target.value;
                                    this.setState({
                                        placeIndex: newState,
                                        ...this.state.city,
                                        ...this.state.latitude,
                                        ...this.state.longitude,
                                        ...this.state.radius
                                    });
                                }
                                }>
                                    <option value="1" selected={this.targetMinistry === 1 ? 'selected' : ''}>{Lang[displayLanguage].blog_ministry_options["1"]}</option>
                                    <option value="2" selected={this.targetMinistry === 2 ? 'selected' : ''}>{Lang[displayLanguage].blog_ministry_options["2"]}</option>
                                    <option value="3" selected={this.targetMinistry === 3 ? 'selected' : ''}>{Lang[displayLanguage].blog_ministry_options["3"]}</option>
                                    <option value="4" selected={this.targetMinistry === 4 ? 'selected' : ''}>{Lang[displayLanguage].blog_ministry_options["4"]}
                                    </option>
                                    <option value="5" selected={this.targetMinistry === 5 ? 'selected' : ''}>{Lang[displayLanguage].blog_ministry_options["5"]}</option>
                                    <option value="6" selected={this.targetMinistry === 6 ? 'selected' : ''}>{Lang[displayLanguage].blog_ministry_options["6"]}</option>
                                    <option value="7" selected={this.targetMinistry === 7 ? 'selected' : ''}>{Lang[displayLanguage].blog_ministry_options["7"]}
                                    </option>
                                    <option value="8" selected={this.targetMinistry === 8 ? 'selected' : ''}>{Lang[displayLanguage].blog_ministry_options["8"]}
                                    </option>
                                    <option value="9" selected={this.targetMinistry === 9 ? 'selected' : ''}>{Lang[displayLanguage].blog_ministry_options["9"]}</option>
                                </select>
                            </div>
                            <div className="main_ministrieschange_item col-sm-6">
                                {Lang[displayLanguage].blog_city_prompt}
                                <select className="main_ministrieschange-select" onChange={event => {
                                    let newState = event.target.value;
                                    this.setState({
                                        ...this.state.placeIndex,
                                        city: newState,
                                        ...this.state.latitude,
                                        ...this.state.longitude,
                                        ...this.state.radius
                                    });
                                }}>
                                    {this.temp}
                                </select>
                            </div>
                        </div>

                    </div>

                    <React.Fragment>{this.loadMinistriesComponent()}</React.Fragment>

                </div>
                <Comments/>
                <LeaveReply/>

            </div>
        )
    }
}


export default FullArticle;

