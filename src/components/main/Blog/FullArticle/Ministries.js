import React from "react";
import Ministry from "./Ministries/Ministry";
import languageSet from "../../../../utilites/languageSet";
import {baseUrl} from "../../../Constants";
import fetchErrorMessage from "../../../../utilites/fetchErrorMessage";
import Lang from "../../../../i18n/lang";

class Ministries extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            lang: languageSet(),
            names: [],
            lats: [],
            longs: [],
            schedules: [],
            phones: [],
            websites: [],
        };
    }


    componentDidMount() {
        let ministriesCount = 2;
        let tempNames = [];
        let tempLats = [];
        let tempLongs = [];
        let tempSchedules = [];
        let tempPhones = [];
        let tempWebsites = [];
        let fetchURL = `${baseUrl}/step/${this.state.lang}/${this.props.placeIndex}/area/${this.props.latitude}/${this.props.longitude}/${this.props.radius}`;
        fetch(fetchURL)
            .then(response => response.json())
            .then(json => {

                for (let i = 0; i < ministriesCount; i++){
                    tempNames.push(json[i].name);
                    tempPhones.push(json[i].phones);
                    tempLats.push(json[i].latitude);
                    tempLongs.push(json[i].longitude);
                    tempSchedules.push(json[i].schedule);
                    tempWebsites.push(json[i].url);
                }

                this.setState({
                    names: tempNames,
                    lats: tempLongs,
                    longs: tempLats,
                    schedules: tempSchedules,
                    phones: tempPhones,
                    websites: tempWebsites
                })
            })
            .catch(e => fetchErrorMessage(e));
    }


    render() {
        let displayLanguage = languageSet();
        if( this.state.names[0] !== undefined) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="main__fetcherror">
                        </div>
                    </div>
                    <div className="row">
                        <Ministry title={this.state.names[0]} street={`https://www.google.com/maps/@${this.state.lats[0]},${this.state.longs[0]}z`} workingHours={this.state.schedules[0]} phone={this.state.phones[0]} website={this.state.websites[0]} />
                        <Ministry title={this.state.names[1]} street={`https://www.google.com/maps/@${this.state.lats[1]},${this.state.longs[1]}z`} workingHours={this.state.schedules[0]} phone={this.state.phones[1]} website={this.state.websites[1]} />

                    </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="main__fetcherror">
                        </div>
                    </div>
                    <div className="row">
                        {Lang[displayLanguage].loading}

                    </div>
                </div>
            )
        }

    }
}

export default Ministries;