// We don't use passwords for 'leave a reply page', but we use them for 'profile' page

const generateToken = (email, password = '') => {
    let str = (password !== '') ? `${email}:${password}` : email;
    return window.btoa(unescape(encodeURIComponent(str))); // MDN website
}

export default generateToken;