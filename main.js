const root = document.getElementById("root");
const form = document.getElementById("searchBox");
//const url = "http://127.0.0.1:8080";
const searchResults = document.getElementById("searchResults");
const button = document.getElementById("search");
const itunesProxy = "https://proxy-itunes-api.glitch.me";

//event listener for search button
form.addEventListener("search", (e) => {
    console.log(document.getElementById('searchbox text').value)
  const inputField = document.getElementById("inputField").value;
  e.preventDefault();
  searchBox(inputField);
  form.reset();
});

function searchDisplay(data) {
  fetch(itunesProxy + "/search?term=")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.results.length; i++) {
        renderSongCard(data);
      }
    });
}

//render the search info to a card
//html for when the search function is called
function renderSongCard(li, songInfo) {
searchResults.innerHTML = `
<p>${artistName.title}</p>
<img src=${artworkUrl100.image} />
<p>${collectionName.description}</p>
<p>${trackName.description}</p>
<audio controls>
<source src=${previewUrl.trackPreview} type="audio/mpeg">Play</audio>
`;
}
