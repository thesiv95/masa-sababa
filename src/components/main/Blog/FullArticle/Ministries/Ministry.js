import React from "react";
import Lang from "../../../../../i18n/lang";
import languageSet from "../../../../../utilites/languageSet";


class Ministry extends React.Component {

    constructor(props) {

        super(props);
        this.workingHours = this.props['workingHours'];

        this.state = {
            isLoading: true,
            data: this.props
        };

        this.weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    }

    changeState = () => {
            this.setState({
                isLoading: false,
                data: this.props
            })
    };

    componentDidMount(){
            this.changeState()
    }

    render() {

        let displayLanguage = languageSet();
        if(this.state.data !== null) {
            return (
                <div className='col-sm-6'>
                    <div className="main__ministry">
                        <h5 className="main__ministry-title">{this.props.title}</h5>
                        <p className="main__ministry-street">
                            <a href={this.props.street} target="_blank" rel="noopener noreferrer">Google Maps</a>
                        </p>
                        <div className="main__ministry-work">
                            <p>{Lang[displayLanguage].blog_ministry_weekday['0']}: {this.workingHours[0] !== 'close' ? this.workingHours[0] : Lang[displayLanguage].blog_ministry_isclosed}</p>
                            <p>{Lang[displayLanguage].blog_ministry_weekday['1']}:  {this.workingHours[1] !== 'close' ? this.workingHours[1] : Lang[displayLanguage].blog_ministry_isclosed}</p>
                            <p>{Lang[displayLanguage].blog_ministry_weekday['2']}: {this.workingHours[2] !== 'close' ? this.workingHours[2] : Lang[displayLanguage].blog_ministry_isclosed}</p>
                            <p>{Lang[displayLanguage].blog_ministry_weekday['3']}: {this.workingHours[3] !== 'close' ? this.workingHours[3] : Lang[displayLanguage].blog_ministry_isclosed}</p>
                            <p>{Lang[displayLanguage].blog_ministry_weekday['4']}: {this.workingHours[4] !== 'close' ? this.workingHours[4] : Lang[displayLanguage].blog_ministry_isclosed}</p>
                            <p>{Lang[displayLanguage].blog_ministry_weekday['5']}: {this.workingHours[5] !== 'close' ? this.workingHours[5] : Lang[displayLanguage].blog_ministry_isclosed}</p>
                            <p>{Lang[displayLanguage].blog_ministry_weekday['6']}: {this.workingHours[6] !== 'close' ? this.workingHours[6] : Lang[displayLanguage].blog_ministry_isclosed}</p>
                        </div>
                        <p className="main__ministry-phone">
                            <em>{Lang[displayLanguage].blog_ministry_phones} {this.props.phone}</em>
                        </p>
                        <p className="main__ministry-website">
                            <a href={`http://${this.props.website}`} target='_blank' rel='noopener noreferrer'>{this.props.website}</a>
                        </p>
                    </div>
                </div>



            )
        } else {
            return Lang[displayLanguage].loading;
        }


    }
}

export default Ministry;