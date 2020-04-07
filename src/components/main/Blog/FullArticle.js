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
import fire from "../../../database/fire";
import showAlert from "../../../utilites/showAlert";

class FullArticle extends React.Component {

    displayLanguage = languageSet();
    allCities = [];
    temp = [];
    placeIndex = localStorage.getItem('targetNumber') !== null ? localStorage.getItem('targetNumber') : '1';
    datae = new Date();

    targetClass = 'main_fetcherror';

    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            placeIds: [],
            placeIndex: this.props.location.state === null ? 1 : this.props.location.state.number,
            city: 'Tel Aviv',
            latitude: 32.7895852,
            longitude: 34.9864697,
            radius: 50,
            comments: null,
            isLoading: false
        };
    }


    dateFormattedString = dateAndAuthorFormatted(
        this.datae.getDate(),
        this.datae.getMonth(),
        this.datae.getFullYear(),
        'Moshe Dayan');

    UNSAFE_componentWillMount() {

        this.allCities = Object.values(Cities[this.displayLanguage]);
        for (let i in this.allCities){
            this.temp.push(<option key={i}>{this.allCities[i]}</option>);
        }

    }


    componentDidMount() {
        this.loadData();
    }

    loadData = () => {

        let data = [];
        fire.database().ref('/comments').once('value').then(function(snapshot) {

            data.push(Object.values(snapshot.val()));
            return data;

        }).then(
            data => this.setState({
                comments: data
            })
        ).catch(() => showAlert(Lang[this.displayLanguage].comments_error, this.targetClass));
        this.setState({
            comments: data
        })
    };


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

    makeOption = () => {
        let arr = [];
        for (let i = 1; i < 10; i++){
            if(i === this.state.placeIndex){
                arr.push( <option key={i} selected={true} value={i}>{Lang[this.displayLanguage].blog_ministry_options[`${i}`]}</option>)
            } else {
                arr.push( <option key={i} value={i}>{Lang[this.displayLanguage].blog_ministry_options[`${i}`]}</option>)
            }
            
        }
        return arr;
    };


    render() {
        if (localStorage.getItem('targetMinistry') !== null){
            this.targetMinistry = parseInt(localStorage.getItem('targetMinistry'));
        }
        return (
            <div>
                <h2 className="main_header article-header">{Lang[this.displayLanguage].blog_teudatzeut_title}</h2>
                <p className="main_articlesubheader text-center">
                    {this.dateFormattedString}
                </p>
                <div className="main_articlecontent">
                    <Video youtubeCode="wPwZnpqZIk0"/>
                    <p className="text-center">{Lang[this.displayLanguage].blog_teudatzeut_description}</p>
                    <blockquote>
                        {Lang[this.displayLanguage].blog_teudatzeut_blockquote}
                    </blockquote>
                    <Map/>

                    <div className="main_ministrieschange container">
                        <div className="row">
                            <div className="main_ministrieschange_item col-sm-6">
                                {Lang[this.displayLanguage].blog_ministry_prompt}
                                <select className="main_ministrieschange-select" >

                                   {this.makeOption()}
                                </select>
                            </div>
                            <div className="main_ministrieschange_item col-sm-6">
                                {Lang[this.displayLanguage].blog_city_prompt}
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
                <Comments data={this.state.comments} />
                <LeaveReply/>

            </div>
        )
    }
}


export default FullArticle;

