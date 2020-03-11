import React from "react";
import Lang from "./../../i18n/lang"
import languageSet from "../../languageSet";

class Search extends React.Component {
    render() {
        let displayLanguage = languageSet();
        return (
            <div className="header_search col-md-4">
                <input className="header_search-input" type="text" placeholder={Lang[displayLanguage].header_search_placeholder}
                       name="searchbar" id="searchbar"/>
                <img className="header_search-icon" src="img/search.svg" alt="search icon"/>
            </div>
        )
    }
}

export default Search;