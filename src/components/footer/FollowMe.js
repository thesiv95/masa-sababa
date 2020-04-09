import React from "react";
import Address from "./FollowMe/Address";
import Follow from "./FollowMe/Follow";

class FollowMe extends React.Component{
    render() {
        return (
            <div className="footer__block col-xs-3">
                <Address/>
                <Follow/>
            </div>
        )
    }
}

export default FollowMe;