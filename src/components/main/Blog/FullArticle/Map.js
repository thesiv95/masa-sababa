import React from "react";

class Map extends React.Component {
    render() {
        return (
            <div className="main_mapcontainer">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1690.4314067220475!2d34.78887360573874!3d32.072959049762765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b9db0b8cf79%3A0xef1fc7b033dc77a5!2sTel%20Aviv%20Government%20Complex!5e0!3m2!1sen!2sil!4v1583837039113!5m2!1sen!2sil"
                    className="main_map" frameBorder="0" title={'Google Maps'} />
            </div>
        )
    }
}

export default Map;