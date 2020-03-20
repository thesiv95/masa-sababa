import React from "react";

import Map from "./FullArticle/Map";
import Comments from "./FullArticle/Comments";
import LeaveReply from "./FullArticle/LeaveReply";
import Ministries from "./FullArticle/Ministries";
import Video from "./FullArticle/Video";
import Lang from "./../../../i18n/lang";
import languageSet from "../../../utilites/languageSet";
import dateAndAuthorFormatted from "../../../utilites/dateAndAuthorFormatted";
import {baseUrl} from "../../Constants";
import fetchErrorMessage from "../../../utilites/fetchErrorMessage";


class FullArticle extends React.Component {

    displayLanguage = languageSet();
    allCities = [];

    constructor(props) {
        super(props);
        this.state = {
            placeIndex: 1,
            city: 'Tel Aviv',
            latitude: 32.7895852,
            longitude: 34.9864697,
            radius: 50
        };
    }

    dateFormattedString = dateAndAuthorFormatted(this.props.day, this.props.month, this.props.year, 'Moshe Dayan');


    loadMinistriesComponent = () =>{
        if(this.state.placeIndex > 0){
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

    // cities list
    componentDidMount() {
        let tempCities = [];
        fetch(`${baseUrl}/${this.displayLanguage}/city`)
            .then(response => response.json())
            .then(json => {
                // for (let i = 0; json.length; i++){
                //     tempCities.push(json[i].name)
                // }

                console.log(json)
            })
            //.catch(e => fetchErrorMessage(e))
    }

    render() {
        let displayLanguage = this.displayLanguage;

        return (
            <div>
                <div className="main_fetcherror">
                </div>
                <h2 className="main_header article-header">{Lang[displayLanguage].blog_teudatzeut_title}</h2>
                <p className="main_articlesubheader">
                    {this.dateFormattedString}
                </p>
                <div className="main_articlecontent">
                    <Video youtubeCode="wPwZnpqZIk0" />
                    <p>{Lang[displayLanguage].blog_teudatzeut_description}</p>
                    <blockquote>
                        {Lang[displayLanguage].blog_teudatzeut_blockquote}
                    </blockquote>
                    <Map/>

                    <div className="main_ministrieschange">
                        {Lang[displayLanguage].blog_ministry_prompt}
                        <select className="main_ministrieschange-select" onChange={ event => {
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
                            <option value="1">{Lang[displayLanguage].blog_ministry_options["1"]}</option>
                            <option value="2">{Lang[displayLanguage].blog_ministry_options["2"]}</option>
                            <option value="3">{Lang[displayLanguage].blog_ministry_options["3"]}</option>
                            <option value="4">{Lang[displayLanguage].blog_ministry_options["4"]}
                            </option>
                            <option value="5">{Lang[displayLanguage].blog_ministry_options["5"]}</option>
                            <option value="6">{Lang[displayLanguage].blog_ministry_options["6"]}</option>
                            <option value="7">{Lang[displayLanguage].blog_ministry_options["7"]}
                            </option>
                            <option value="8">{Lang[displayLanguage].blog_ministry_options["8"]}
                            </option>
                            <option value="9">{Lang[displayLanguage].blog_ministry_options["9"]}</option>
                        </select>
                        <div className="main_ministrieschange-inputs">
                            <input className="main_ministrieschange-input" placeholder={'vvedite city'} onChange={ event => {
                                let newState = event.target.value;
                                this.setState({
                                    ...this.state.placeIndex,
                                    city: newState,
                                    ...this.state.latitude,
                                    ...this.state.longitude,
                                    ...this.state.radius
                                });
                            }} />
                        </div>



                        <div className="main_ministrieschange-inputs">
                            <select className="main_ministrieschange-select" onChange={ event => {
                                    let newState = event.target.value;
                                    this.setState({
                                         ...this.state.placeIndex,
                                        ...this.state.city,
                                         latitude: newState,
                                        ...this.state.latitude,
                                        ...this.state.longitude,
                                        ...this.state.radius   
                                    });
                                }
                            }>
                                {

                                }
                            </select>
                            <input className="main_ministrieschange-input" placeholder={'Longitude'} onChange={ event => {
                                    let newState = event.target.value;
                                    this.setState({
                                         ...this.state.placeIndex,
                                        ...this.state.city,
                                         ...this.state.latitude,
                                        longitude: newState,
                                        ...this.state.radius   
                                    });
                                }
                            } />
                            <input type="number" min="0" max="100" className="main_ministrieschange-input-radius" placeholder={'Radius'} onChange={ event => {
                                    let newState = event.target.value;
                                    this.setState({
                                         ...this.state.placeIndex,
                                        ...this.state.city,
                                         ...this.state.latitude,
                                         ...this.state.longitude,
                                        radius: newState   
                                    });
                                }
                            } />
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

