let searchbar = document.querySelector(".search");
const google = 'https://www.google.com/search?q=';
const site = searchbar.textContent;

    function search() {
        const url = google + site;
        const win = window.open(url, '_blank');
    }