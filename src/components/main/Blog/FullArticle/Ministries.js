import React from "react";
import Ministry from "./Ministry";

class Ministries extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <Ministry/>
                    </div>
                    <div className="col-sm-6">
                        <Ministry/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <Ministry/>
                    </div>
                    <div className="col-sm-6">
                        <Ministry/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <Ministry/>
                    </div>
                    <div className="col-sm-6">
                        <Ministry/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <Ministry/>
                    </div>
                    <div className="col-sm-6">
                        <Ministry/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ministries;