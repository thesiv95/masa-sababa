import React from "react";
import Lang from "./../../../i18n/lang";

class Address extends React.Component {
    render() {
        return(
            <div>
                <h4 className="footer_title">{Lang.ru.footer_address_title}</h4>
                <div className="footer_block-address">
                    <p className="footer_text">SababaLife LLC</p>
                    <p className="footer_text">{Lang.ru.footer_address_street}</p>
                </div>
            </div>
        )
    }
}

export default Address;