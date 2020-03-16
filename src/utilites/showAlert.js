/*
    Error alert params:
    message - message text
    targetClass - div to render, it has this class
    isError - if false, will show positive message
 */

const showAlert = (message, targetClass, isError = true) => {
    let div = document.querySelector(`.${targetClass}`);
    div.style.display = 'block';
    div.className = `${targetClass} ${(isError) ? 'non-valid' : 'valid'}`;
    div.innerHTML = message;

    setTimeout(() => {
        div.style.display = 'none';
    }, 3000);

};

export default showAlert;