import React from "react";

class Follow extends React.Component {
    render() {
        return (
            <div>
                <h4 className="footer_title">Follow Us</h4>
                <div className="footer_block-socialbuttons">
                    <div className="footer_block-socialbutton">
                        <a href="#">
                            <img src="img/facebook.svg" alt="fb" className="footer_block-socialimage"/>
                        </a>
                    </div>
                    <div className="footer_block-socialbutton">
                        <a href="#">
                            <img src="img/skype.svg" alt="skype" className="footer_block-socialimage"/>
                        </a>
                    </div>
                    <div className="footer_block-socialbutton">
                        <a href="#">
                            <img src="img/linkedin.svg" alt="linkedin" className="footer_block-socialimage"/>
                        </a>
                    </div>
                    <div className="footer_block-socialbutton">
                        <a href="#">
                            <img src="img/instagram.svg" alt="insta" className="footer_block-socialimage"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Follow;