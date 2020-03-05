import React from "react";

class Search extends React.Component {
    render() {
        return (
            <div className="header_search col-md-4">
                <input className="header_search-input" type="text" placeholder="Search here"
                       name="searchbar" id="searchbar"/>
                <img className="header_search-icon" src="img/search.svg" alt="search icon"/>
            </div>
        )
    }
}

export default Search;