import showAlert from "./showAlert";
import Lang from "../i18n/lang";
import languageSet from "./languageSet";

const authErrorMessage = (errorCode, targetClass) => {
    let displayLanguage = languageSet();

    let messageText;

    switch (errorCode) { // define firebase error code
        case 'auth/account-exists-with-different-credential':
            messageText = Lang[displayLanguage].profile_backend_error.account_exists;
            break;
        case 'auth/email-already-in-use':
            messageText = Lang[displayLanguage].profile_backend_error.email_already_in_use;
            break;
        case 'auth/email-badly-formatted':
            messageText = Lang[displayLanguage].profile_backend_error.email_badly_formatted;
            break;
        case 'auth/invalid-email':
            messageText = Lang[displayLanguage].profile_backend_error.email_invalid;
            break;
        case 'auth/invalid-password':
            messageText = Lang[displayLanguage].profile_backend_error.password_invalid;
            break;
        case 'auth/session-cookie-expired':
        case 'auth/session-cookie-revoked':
            messageText = Lang[displayLanguage].profile_backend_error.session;
            break;
        default:
            messageText = Lang[displayLanguage].profile_backend_error.default;
    }
    showAlert(messageText, targetClass);

};

export default  authErrorMessage;