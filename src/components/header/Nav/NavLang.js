import React from "react";

class NavLang extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        // Get selected lang value & put into storage
        this.setState({value: event.target.value});
        localStorage.setItem('lang', event.target.value);



    }


    render() {
        return(
            <select className='header_select' value={this.state.value} onChange={this.handleChange}>
                <option value='en'>en</option>
                <option value='ru'>ru</option>
                <option value='he'>he</option>
                <option value='fr'>fr</option>
            </select>
        )
    }
}

export default NavLang;