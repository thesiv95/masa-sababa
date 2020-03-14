import React from "react";
import Ministry from "./Ministry";
import languageSet from "../../../../languageSet";
import {baseUrl} from "../../../Constants";


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
            websites: []
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        let ministriesCount = 2;
        let tempNames = [];
        let tempLats = [];
        let tempLongs = [];
        let tempSchedules = [];
        let tempPhones = [];
        let tempWebsites = [];
        let fetchURL = `${baseUrl}/step/${this.state.lang}/${this.props.placeIndex}/area/${this.props.lat}/${this.props.lon}/${this.props.radius}`;
        fetch(fetchURL)
            .then(response => response.json())
            .then(json => {
                // console.log(json)
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
            });
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <Ministry title={this.state.names[0]} street={`https://www.google.com/maps/@${this.state.lats[0]},${this.state.longs[0]}z`} workingHours={this.state.schedules} phone={this.state.phones[0]} website={this.state.websites[0]} />
                    <Ministry title={this.state.names[1]} street={`https://www.google.com/maps/@${this.state.lats[1]},${this.state.longs[1]}z`} workingHours={this.state.schedules} phone={this.state.phones[1]} website={this.state.websites[1]} />
                </div>
            </div>
        )
    }
}

export default Ministries;