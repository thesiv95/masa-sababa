import React from "react";

class Profile extends React.Component {
    render() {
        return (
            <div>
                <h2 className="main_header">Profile</h2>
                <div className="main_profile">
                    <div className="main_profileitem profileitem-short">
                        <h5 className="main_profileitem-title">First Name</h5>
                        <input type="text" name="" id="" className="main_profileitem-input" placeholder="Elena"/>
                    </div>
                    <div className="main_profileitem profileitem-short">
                        <h5 className="main_profileitem-title">Last Name</h5>
                        <input type="text" name="" id="" className="main_profileitem-input" placeholder="Johnes"/>
                    </div>
                    <div className="main_profileitem">
                        <h5 className="main_profileitem-title">Your Email Address</h5>
                        <input type="email" required name="" id="" className="main_profileitem-input"
                               placeholder="e.johnes@gmail.com"/>
                    </div>
                    <div className="main_profileitem">
                        <h5 className="main_profileitem-title">First Name</h5>
                        <input type="password" name="" id="" className="main_profileitem-input"
                               placeholder="******************"/>
                    </div>
                    <div className="main_profileitem">
                        <h5 className="main_profileitem-title">First Name</h5>
                        <input type="password" name="" id="" className="main_profileitem-input"
                               placeholder="*****************"/>
                    </div>
                    <button className="button button-accent">Save Details</button>
                </div>
            </div>
        )
    }
}

export default Profile;