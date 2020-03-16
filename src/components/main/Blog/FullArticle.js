import React from "react";

import Map from "./FullArticle/Map";
import Comments from "./FullArticle/Comments";
import LeaveReply from "./FullArticle/LeaveReply";
import Ministries from "./FullArticle/Ministries";
import Video from "./FullArticle/Video";
import Lang from "./../../../i18n/lang";
import languageSet from "../../../utilites/languageSet";


class FullArticle extends React.Component {

    displayLanguage = languageSet();

    constructor(props) {
        super(props);
        this.state = {
            placeIndex: 1,
            latitude: 32.7895852,
            longitude: 34.9864697,
            radius: 50
        }
        console.log(this.state)
    }

    // componentWillUnmount() {
    //     this._isMounted = false;
    // }



    latitudeChange(event){
        this.setState({latitude: event.target.value});
    }

    longitudeChange(event){
        this.setState({longitude: event.target.value});
    }

    radiusChange(event){
        console.log(event.target.value)
        this.setState({radius: event.target.value});
    }


    dateFormatted(){
        let month = this.props.month;
        let monthString = Lang[this.displayLanguage].blog_comments_month[month];
        switch (this.displayLanguage) {
            case 'en':
                return `By ${this.props.author} ${monthString} ${this.props.day}, ${this.props.year}`;
            case 'ru':
                return `Автор: ${this.props.author} Дата: ${this.props.day} ${monthString} ${this.props.year}`;
            case 'he':
                return `${this.props.author} ${monthString} ${this.props.day}, ${this.props.year} על ידי  `;
            case 'fr':
                return `Par ${this.props.author} ${monthString} ${this.props.day}, ${this.props.year}`;
            default:
                return `[Language file not set, contact the website administrator]`;
        }
    }

     doSmt = () =>{
         console.log("dosmt")
         if(this.state.placeIndex > 0){
            console.log(this.state.placeIndex, "index")
            return <Ministries
            placeIndex={this.state.placeIndex}
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            radius={this.state.radius} />
         } else {
             return "Loading"
         }
       
    }

    render() {
        let displayLanguage = this.displayLanguage;

        return (
            <div>
                <h2 className="main_header article-header">{Lang[displayLanguage].blog_teudatzeut_title}</h2>
                <p className="main_articlesubheader">
                    {this.dateFormatted()}
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
                            <input className="main_ministrieschange-input" placeholder={'Latitude'}
                                   onChange={ event => {
                                    let newState = event.target.value;
                                    this.setState({
                                         ...this.state.placeIndex,
                                         latitude: newState,
                                        ...this.state.longitude,
                                        ...this.state.radius   
                                    });
                                }
                            } />
                            <input className="main_ministrieschange-input" placeholder={'Longitude'} onChange={ event => {
                                    let newState = event.target.value;
                                    this.setState({
                                         ...this.state.placeIndex,
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
                                         ...this.state.latitude,
                                         ...this.state.longitude,
                                        radius: newState   
                                    });
                                }
                            } />
                        </div>


                    </div>
                    
                    <React.Fragment>{this.doSmt()}</React.Fragment>
                   
                </div>
                <Comments/>
                <LeaveReply/>

            </div>
        )
    }
}


export default FullArticle;


// TODO: кнопки профиль и логаут
// TODO: завершить стилизацию
