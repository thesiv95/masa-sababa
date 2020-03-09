import React from "react";
import Address from "./followme/Address";
import Follow from "./followme/Follow";

class FollowMe extends React.Component{
    render() {
        return (
            <div className="footer_block col-xs-3">
                <Address/>
                <Follow/>
            </div>
        )
    }
}

export default FollowMe