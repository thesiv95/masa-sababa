import React from "react";

import Map from "./FullArticle/Map";
import Comments from "./FullArticle/Comments";
import LeaveReply from "./FullArticle/LeaveReply";
import Ministries from "./FullArticle/Ministries";
import Video from "./FullArticle/Video";
import Lang from "./../../../i18n/lang";
import languageSet from "../../../languageSet";


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

    componentWillUnmount() {
        this._isMounted = false;
    }



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
                    {/*todo: выпадашка которая переключает индекс*/}
                    <div className="main_ministrieschange">
                        Выберите министерство и задайте координаты
                        <select className="main_ministrieschange-select" onChange={ event => {
                                let newState = {placeIndex: event.target.value};
                                this.setState({newState});
                            }
                        }>
                            <option value="1">Для получения теудат зеута</option>
                            <option value="2">Для открытия счета в банке</option>
                            <option value="3">Для записи в больничную кассу</option>
                            <option value="4">Для оформления корзины абсорбции и записи в ульпан
                            </option>
                            <option value="5">Для записи детей в детский сад/школу</option>
                            <option value="6">Для поиска жилья</option>
                            <option value="7">Для получения арноны
                            </option>
                            <option value="8">Для подтверждения образования
                            </option>
                            <option value="9">Для подтверждения водительских прав</option>
                        </select>

                        <div className="main_ministrieschange-inputs">
                            <input className="main_ministrieschange-input" placeholder={'Latitude'}
                                   onChange={ event => {
                                let newState = {placeIndex: event.target.value};
                                this.setState({newState})
                                   }
                               } />
                            <input className="main_ministrieschange-input" placeholder={'Longitude'} onChange={this.longitudeChange} />
                            <input type="number" min="0" max="100" className="main_ministrieschange-input-radius" placeholder={'Radius'} onChange={this.radiusChange} />
                        </div>


                    </div>

                    <Ministries
                        placeIndex={this.state.placeIndex}
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}
                        radius={this.state.radius} />
                </div>
                <Comments/>
                <LeaveReply/>

            </div>
        )
    }
}


export default FullArticle;


// TODO: кнопки профиль и логаут
// TODO: ссылка для категории(!)
// TODO: завершить стилизацию
