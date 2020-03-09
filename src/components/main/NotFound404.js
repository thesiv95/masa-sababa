import React from "react";

class NotFound404 extends React.Component {
    render() {
        return (
            <div>
                <h2 className='main_header'>Sorry! Page not found</h2>
                <div className="main_steps container">
                    <div className="row">
                        <div className="col-sm-offset-5">
                            <a className="button button-accent" href='/home'>Go Home</a>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default NotFound404;