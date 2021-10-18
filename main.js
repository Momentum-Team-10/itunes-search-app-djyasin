const root = document.getElementById('root');
const form = document.getElementById('searchBox');
const url = "http://127.0.0.1:8080";
const searchResults = document.getElementById('searchResults');
const button = document.getElementById('search')

//event listener for search button 
form.addEventListener("search", (e) => {
    e.preventDefault();
    console.log(document.getElementById('searchBox').value);
    const inputField = document.getElementById('inputField').value;
    searchBox(inputField);
    form.reset();
})

//function searchResults(data) {
//    fetch ('https://proxy-itunes-api.glitch.me/search?term=')
//    .then(response => response.json())
//   .then(data => {
//       console.log(data)
//       renderSongCard(data)
//})

//render the search info to a card
//function renderSongCard

//html for when the search function is called
//searchResults.innerHTML = `
//<p>${artistName.title}</p>
//<img src=${artworkUrl100.image} />
//<p>${collectionName.description}</p>
//<p>${trackName.description}</p>
//<audio controls>
//<source src=${previewUrl.trackPreview} type="audio/mpeg">Play</audio>
//`}