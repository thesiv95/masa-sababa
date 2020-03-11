import React from "react";

class NavLang extends React.Component {
    render() {
        return(
            <select className='header_select' id='languageSelector'>
                <option value='en'>en</option>
                <option value='ru'>ru</option>
                <option value='he'>he</option>
                <option value='fr'>fr</option>
            </select>
        )
    }
}

export default NavLang;