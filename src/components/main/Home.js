import React from "react";

class Home extends React.Component {
    render() {
        return(
            <div>
                <h2 className="main_header">Welcome to Israel</h2>
                <p className="main_subheader">First steps of the new repatriate</p>
                <p className="main_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                    explicabo sequi nesciunt laudantium repudiandae saepe?</p>
                <div className="main_buttons">
                    <button className="button button-accent button-margin">Sign up</button>
                    <button className="button button-margin">Know more</button>
                </div>
                <div className="main_pic">
                    <img src="img/clip-2.png" alt="main pic" className="main_pic-image img-fluid"/>
                    <img src="img/Rectangle 365.svg" alt="gradient" className="main_pic-gradient img-fluid"/>
                </div>
            </div>
        )
    }
}

export default Home;