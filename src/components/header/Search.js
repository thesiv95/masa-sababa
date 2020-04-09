import React from "react";
import Lang from "./../../i18n/lang"
import languageSet from "../../utilites/languageSet";
import {Link} from "react-router-dom";



class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            suggestions: [],
            text: ''
        };
    }

    isHidden;

    onTextChanged = (event) => {
        const { items } = this.props;
        const value = event.target.value;
        let suggestions = [];
        if (value.length > 0){
            // pattern ^ => beginning of the word
            // flag i => case-insensitive
            const regex = new RegExp(`^${value}`, 'i');
           suggestions = items.filter(value => regex.test(value));
        }
        // = suggestions: suggestions
        this.setState({ suggestions, text: value });
    };

    suggestionsSelected(value){
        this.setState({
            text: value,
            suggestions: []
        })
    }

    toggleSuggestions = () => {
      let suggestionsDiv = document.querySelector('#renderedSuggestions');

      if (!this.isHidden){
          this.isHidden = false;
          suggestionsDiv.style.display = 'none';
      } else {
          this.isHidden = true;
          suggestionsDiv.style.display = 'block';
      }

    };

    renderSuggestions = () => {
        const { suggestions } = this.state;
        let itemSplitted = []; // => array [name, url]
        if (suggestions.length === 0) { return null; }
        for (let i in suggestions){
            itemSplitted.push(suggestions[i].split('/'))
        }
        // key => React's specific attribute
        return (
            <ul className="header__search-list">
                {
                    itemSplitted.map((item) =>
                    <li className="header__search-list_item" key={item[0]} onClick={() => this.suggestionsSelected(item[0])}>
                            {<Link className="header__search-list_link" to={`/${item[1]}`}>{item[0]}</Link>}
                    </li>)

                }
            </ul>
        )
    };

    render() {
        let displayLanguage = languageSet();
        return (
            <div className="header__search col-md-3 col-sm-12">
                <div className="header__search_wrapper">
                    <input className="header__search-input" type="text" placeholder={Lang[displayLanguage].header_search_placeholder} name="searchbar" id="searchbar" onChange={this.onTextChanged} />
                    <img src="img/search.svg" alt="search_icon" className="header__search-img" onClick={this.toggleSuggestions} />
                </div>
                <div id="renderedSuggestions">{this.renderSuggestions()}</div>
            </div>

        )
    }
}

export default Search;