import React from "react";

class Ministry extends React.Component {
    render() {
        return (
            <div className="main_ministry">
                <h5 className="main_ministry-title">Ministry Of Interior</h5>
                <p className="main_ministry-street">
                    Tel Aviv, Derech Menachem Begin 125 Begin 125
                </p>
                <p className="main_ministry-work">
                    <i></i>
                    Open now
                </p>
                <p className="main_ministry-phone">
                    <i></i>
                    03456789
                </p>
                <p className="main_ministry-website">
                    <i></i>
                    https://www.gov.il
                </p>
            </div>
        )
    }
}

export default Ministry;