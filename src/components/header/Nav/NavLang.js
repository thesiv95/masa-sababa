import React from "react";
import languageSet from "../../../languageSet";

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
        // todo: без перезагрузки

    }

    componentDidUpdate(){
        // reload
    }

    render() {
        console.log(this.state.value)
        return(
            <select className='header_select' onChange={this.handleChange} defaultValue={languageSet()}>

                <option value='en'>en</option>
                <option value='ru'>ru</option>
                <option value='he'>he</option>
                <option value='fr'>fr</option>
            </select>
        )
    }
}

export default NavLang;