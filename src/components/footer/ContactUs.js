import React from "react";

class ContactUs extends React.Component {
    render() {
        return (
            <div className="footer_block col-xs-3">
                <h4 className="footer_title">Contact Us</h4>
                <p className="footer_text">
                    <img src="/img/bootstrap-icons/phone.svg" alt="phone" width="32" height="32" title="phone"/>
                    <a href="tel:03456789" className="footer_link">03456789</a>
                </p>
                <p className="footer_text">
                    <img src="/img/bootstrap-icons/geo.svg" alt="location" width="32" height="32" title="geo"/>
                        <a href="https://goo.gl/maps/4Ns4315AuiHwy1Px5" className="footer_link" target="_blank">Tel
                            Aviv, Israel</a>
                </p>
                <p className="footer_text">
                    <img src="/img/bootstrap-icons/envelope.svg" alt="email" width="32" height="32"
                         title="envelope"/>
                    <a href="mailto:info@sababalife.com" className="footer_link">info@sababalife.com</a>
                </p>
            </div>
        )
    }
}

export default ContactUs;