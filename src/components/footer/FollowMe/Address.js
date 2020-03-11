import React from "react";
import Lang from "./../../../i18n/ru";

class Address extends React.Component {
    render() {
        return(
            <div>
                <h4 className="footer_title">{Lang.footer_address_title}</h4>
                <div className="footer_block-address">
                    <p className="footer_text">SababaLife LLC</p>
                    <p className="footer_text">{Lang.footer_address_street}</p>
                </div>
            </div>
        )
    }
}

export default Address;