import React from "react";

class NavLang extends React.Component {
    render() {
        return(
            <select className='header_select'>
                <option>en</option>
                <option>ru</option>
                <option>he</option>
                <option>fr</option>
            </select>
        )
    }
}

export default NavLang;