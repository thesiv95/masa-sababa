import React from "react";

class NavLang extends React.Component {

    changeLanguage = (event) => {
        let lang = event.target.value;
        console.log(lang);
    }


    render() {
        return(
            <select className='header_select' id='languageSelector' onChange={this.changeLanguage}>
                <option value='en'>en</option>
                <option value='ru'>ru</option>
                <option value='he'>he</option>
                <option value='fr'>fr</option>
            </select>
        )
    }
}

export default NavLang;