const languageSet = () => {
    let currentLang = '';

    if (localStorage.getItem('lang') === null){
        // Check language in the browser for the 1st time launch
        let browserLang = window.navigator.language;
        currentLang = browserLang.slice(0, 2);

        // Only 'en', 'ru', 'he', 'fr'. If the language is exotic - set to English
        let usedLangs = ['en', 'ru', 'he', 'fr'], isUsedLang = false;
        usedLangs.forEach(lang => {
            if (currentLang === lang){
                isUsedLang = true;
            }
        });

        if (!isUsedLang) currentLang = 'en';
        localStorage.setItem('lang', currentLang);
    } else {
        currentLang = localStorage.getItem('lang');
    }

    return currentLang;
};

export default languageSet;