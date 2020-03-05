import React from "react";
import ContactUs from "./footer/ContactUs";
import OurCompany from "./footer/OurCompany";
import SocialContacts from "./footer/SocialContacts";
import FollowMe from "./footer/FollowMe";

class Footer extends React.Component {
    render() {
        return (
            <div className="row">
                <ContactUs/>
                <OurCompany/>
                <SocialContacts/>
                <FollowMe/>
            </div>
        )
    }
}

export default Footer;