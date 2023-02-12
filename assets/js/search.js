const submitSearch = () => {
    let keyword = document.getElementById("search").value;
    let goURL = `search.html?s=${keyword}`;
    
    window.location.href = goURL;
}