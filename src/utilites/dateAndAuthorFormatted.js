/*
    Date format function:
    day, month, year = integer
    style - style of text that is printed out. Default is for article.

 */

import languageSet from "./languageSet";
import Lang from "./../i18n/lang";

let displayLanguage = languageSet();

const dateAndAuthorFormatted = (day, month, year, author, style = 'article') => {
    let monthString = Lang[displayLanguage].blog_comments_month[month];
    if (style === 'article') {
        switch (displayLanguage) {
            case 'en':
                return `By ${author} ${monthString} ${day}, ${year}`;
            case 'ru':
                return `Автор: ${author} Дата: ${day} ${monthString} ${year}`;
            case 'he':
                return `${author} ${monthString} ${day}, ${year} על ידי  `;
            case 'fr':
                return `Par ${author} ${monthString} ${day}, ${year}`;
            default:
                return `[Language file not set, contact the website administrator]`;
        }
    } else {
        switch (displayLanguage) {
            case 'en':
                return `${monthString} ${day}, ${year}`;
            case 'ru':
                return `${day} ${monthString} ${year}`;
            case 'he':
                return `${monthString} ${day}, ${year} על ידי  `;
            case 'fr':
                return `${monthString} ${day}, ${year}`;
            default:
                return `[Language file not set]`;
        }

    }

};

export default dateAndAuthorFormatted;