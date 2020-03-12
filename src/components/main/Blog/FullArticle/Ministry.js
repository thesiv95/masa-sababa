import React from "react";
import Lang from "../../../../i18n/lang";
import languageSet from "../../../../languageSet";


class Ministry extends React.Component {

    componentWillUnmount() {
        this._isMounted = false; // thanks stackoverflow.com :)
    }

    getCurrentDay = () => {
        // 0 - sun, 1 - mon, ... 6 - sat
        return new Date().getDay();
    }

    render() {

        let currentDay = this.getCurrentDay();
        let displayLanguage = languageSet();

        return (

                <div className='col-sm-6'>
                    <div className="main_ministry">
                        <h5 className="main_ministry-title">{this.props.title}</h5>
                        <p className="main_ministry-street">
                            <a href={this.props.street} target="_blank" rel="noopener noreferrer">Google Maps</a>
                        </p>
                        <p className="main_ministry-work">

                            {currentDay === 0 ? (this.props.workingHours[0] === 'close' ? Lang[displayLanguage].blog_ministry_isclosed : this.props.workingHours[0]) : ''}
                            {currentDay === 1 ? (this.props.workingHours[1] === 'close' ? Lang[displayLanguage].blog_ministry_isclosed : this.props.workingHours[1]) : ''}
                            {currentDay === 2 ? (this.props.workingHours[2] === 'close' ? Lang[displayLanguage].blog_ministry_isclosed : this.props.workingHours[2]) : ''}
                            {currentDay === 3 ? (this.props.workingHours[3] === 'close' ? Lang[displayLanguage].blog_ministry_isclosed : this.props.workingHours[3]) : ''}
                            {currentDay === 4 ? (this.props.workingHours[4] === 'close' ? Lang[displayLanguage].blog_ministry_isclosed : this.props.workingHours[4]) : ''}
                            {currentDay === 5 ? (this.props.workingHours[5] === 'close' ? Lang[displayLanguage].blog_ministry_isclosed : this.props.workingHours[5]) : ''}
                            {currentDay === 6 ? (this.props.workingHours[6] === 'close' ? Lang[displayLanguage].blog_ministry_isclosed : this.props.workingHours[6]) : ''}

                        </p>
                        <p className="main_ministry-phone">
                            <em>{Lang[displayLanguage].blog_ministry_phones} {this.props.phone}</em>
                        </p>
                        <p className="main_ministry-website">
                            <a href={`http://${this.props.website}`} target='_blank' rel='noopener noreferrer'>{this.props.website}</a>
                        </p>
                    </div>
                </div>



        )
    }
}

export default Ministry;