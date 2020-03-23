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


    renderSuggestions = () => {
        const { suggestions } = this.state;
        let itemSplitted = []; // => array [name, url]
        if (suggestions.length === 0) { return null; }
        for (let i in suggestions){
            itemSplitted.push(suggestions[i].split('/'))
        }
        // key => React's specific attribute
        return (
            <ul>
                {
                    itemSplitted.map((item) =>
                    <li key={item[0]} onClick={() => this.suggestionsSelected(item[0])}>
                            {<Link to={`/${item[1]}`}>{item[0]}</Link>}
                    </li>)

                }
            </ul>
        )
    };

    render() {
        const { text } = this.state;
        let displayLanguage = languageSet();
        return (
            <div className="header_search col-md-4">
                <input className="header_search-input" type="text" placeholder={Lang[displayLanguage].header_search_placeholder}
                       name="searchbar" id="searchbar" onChange={this.onTextChanged} />
                <div>{this.renderSuggestions()}</div>
            </div>

        )
    }
}

export default Search;