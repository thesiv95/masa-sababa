import React from "react";
import languageSet from "../../../utilites/languageSet";


class NavLang extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: languageSet()
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        // Get selected lang value & put into storage
        this.setState({value: event.target.value});
        localStorage.setItem('lang', event.target.value);
        window.location.reload()

    };


    render() {
        return(
            <React.Fragment>
                { /* <div>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                <img src="img/global.svg" className="header__select-icon" alt="lang" />
                <select className='header__select' onChange={this.handleChange} defaultValue={languageSet()}>
                    <option value='en'>en</option>
                    <option value='ru'>ru</option>
                    <option value='he'>he</option>
                    <option value='fr'>fr</option>
                </select>
            </React.Fragment>
        )
    }
}

export default NavLang;