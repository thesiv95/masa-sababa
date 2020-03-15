const generateToken = (email, password) => {
    let str = email + ':' + password;
    return window.btoa(unescape(encodeURIComponent(str))); // MDN website
}

export default generateToken;