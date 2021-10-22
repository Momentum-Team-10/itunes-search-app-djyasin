const root = document.getElementById("root");
const form = document.getElementById("searchBox");
//const url = "http://127.0.0.1:8080";
const searchResults = document.getElementById("searchResults");
const button = document.getElementById("search");
const itunesProxy = "https://proxy-itunes-api.glitch.me/?term=";
const inputField = document.getElementById("inputField");

//event listener for search button
// form.addEventListener("search", (e) => {
//    console.log(document.getElementById("searchBox").value);
// const inputField = document.getElementById("inputField").value;
//   e.preventDefault();
//   searchBox(inputField);
//   console.log (inputField)
//    form.reset();
//  });

document.getElementById('search').addEventListener('click', (e) => {
  e.preventDefault()
  console.log(inputField.value)
  searchBox(inputField)
  form.reset()
})

function searchBox() {
  fetch("https://proxy-itunes-api.glitch.me/search?term=" + inputField.value)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const songs = data.results
      if (songs <= 0) {
          alert('Returned zero results')
      } else {                
          for (let song of songs) {
let artistCard = document.createElement('div')
artistCard.className = 'artist-card'
searchResults.appendChild(artistCard) 
searchResults.innerHTML = `
<img src='${song.artworkUrl100}'></img>
<h1>${song.artistName}</h1>
<p><strong> Album:  </strong>${song.collectionName}</p>
<p><strong>Track: </strong>${song.trackName}</p>
<audio controls src='${song.previewUrl}'></audio>
`;
}
}
}) }