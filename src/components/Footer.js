import React from "react";
import ContactUs from "./footer/ContactUs";
import OurCompany from "./footer/OurCompany";
import SocialContacts from "./footer/SocialContacts";
import FollowMe from "./footer/FollowMe";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer row hidden-print">
                <ContactUs/>
                <OurCompany/>
                <SocialContacts/>
                <FollowMe/>
            </footer>
        )
    }
}

export default Footer;