// import React, {useState, useEffect} from 'react';

// const Ministry = (props) => {
//     console.log(props, "props")
//     const [value, setValue] = useState(props.placeIndex+200)
//     const headerImg = {
//         backgroundSize: 'cover',
//         backgroundPosition: '0 -75px',
//         backgroundRepeat: 'no-repeat',
//         height: 145,
//         width: '100%',
//         opacity: '1',
//         position: 'relative',
//         zIndex: 500
//       };

//       useEffect(()=>{
//         setValue(+props.placeIndex+200)
//       }, [props])

//       return (
//         <aside className="cardA">
//         <header className="cardA-header" style={headerImg}></header>
//         <main className="cardA-body">
//       <h1 className="cardA-title center">Guardians Of The Galaxy </h1>
//       <img src={`https://i.picsum.photos/id/${value}/200/300.jpg`} />
//           <p>
//             A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.
//           </p>
//         </main>
//         <footer className="cardA-footer">
//           <i className="ico far fa-heart" title="add as favorite"></i>
//           <i className="ico fas fa-share-alt" title="share"></i>
//           <i className="ico fab fa-instagram" title="post on Instagram"></i>
//         </footer>
//       </aside>
//       ) 
// }


  
//   export default Ministry





import React from "react";
import Ministry from "./Ministries/Ministry";
import languageSet from "../../../../utilites/languageSet";
import {baseUrl} from "../../../Constants";
import fetchErrorMessage from "../../../../utilites/fetchErrorMessage";


class Ministries extends React.Component{

   
    constructor(props) {
        console.log(props, "props")
        super(props);
        this.state = {
            lang: languageSet(),
            names: [],
            lats: [],
            longs: [],
            schedules: [],
            phones: [],
            websites: [],
        }
        console.log(this.state, "state")
    }

    componentWillReceiveProps(nextProps, nextContent){
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
            })
            .catch(e => fetchErrorMessage(e));
    }

     


    componentDidMount() {
        console.log("Ministry start")
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
            })
            .catch(e => fetchErrorMessage(e));
    }



    render() {
        console.log(this.state.schedules[0], 'schedules0');
        return (
            <div className="container">
                <div className="row">
                    <div className="main_fetcherror">
                    </div>
                </div>
                <div className="row">
                    <Ministry title={this.state.names[0]} street={`https://www.google.com/maps/@${this.state.lats[0]},${this.state.longs[0]}z`} workingHours={this.state.schedules} phone={this.state.phones[0]} website={this.state.websites[0]} />
                    <Ministry title={this.state.names[1]} street={`https://www.google.com/maps/@${this.state.lats[1]},${this.state.longs[1]}z`} workingHours={this.state.schedules[0]} phone={this.state.phones[1]} website={this.state.websites[1]} />
                
                </div>
            </div>
        )
    }
}

export default Ministries;