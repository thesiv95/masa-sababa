import showAlert from "./showAlert";
import Lang from "../i18n/lang";
import languageSet from "./languageSet";

const fetchErrorMessage = (err) => {

    let displayLanguage = languageSet();

    if (err.message.indexOf('Failed to fetch') !== -1){
        showAlert(Lang[displayLanguage].fetch_error_msg, 'main_fetcherror');
    } else {
        showAlert(Lang[displayLanguage].fetch_othererror.msg, 'main_fetcherror');
    }
};

export default fetchErrorMessage;