import React from "react";

class Logo extends React.Component {

    render() {
        return (
                <div className="header_logo col-md-3 col-sm-12">
                    <a href="/">
                        <img src="img/Logo.svg" alt="sababalife" className="header_logo-img"/>
                    </a>
                </div>
        )
    }
}

export default Logo;