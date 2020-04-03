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
            messageText = 'Wrong email!';
            break;
        case 'auth/invalid-password':
            messageText = 'Wrong password!';
            break;
        case 'auth/session-cookie-expired':
        case 'auth/session-cookie-revoked':
            messageText = 'You did nothing on the website for a long time, log in again';
            break;
        default:
            messageText = Lang[displayLanguage].profile_backend_error.default;
    }
    showAlert(messageText, targetClass);

};

export default  authErrorMessage;