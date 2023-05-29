let APIKEY = "o6qLzjsOJyGVBd083ZbXLhtuvftVgGPF";
document.addEventListener("DOMContentLoaded", init);
function init() {
    document.getElementById("btnSearch").addEventListener("click", ev => {
        ev.preventDefault(); //to stop the page reload
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=9&q=`;
        let str = document.getElementById("search").value.trim();
        url = url.concat(str);
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(content => {
                //data, pagination, meta
                console.log(content.data)
                console.log('META', content.meta);
            })
            .catch(err => {
                console.error(err);
            });
    });
}