const fetchAPI = (url) => {
    fetch(url).then(res => res.json())
}