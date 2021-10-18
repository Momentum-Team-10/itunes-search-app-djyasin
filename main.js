const root = document.getElementById('root');
const form = document.getElementById('searchBox');
const url = "http://127.0.0.1:8080"

//event listener for search button 
form.addEventListener("search", (e) => {
    e.preventDefault();
    console.log(document.getElementById('searchBox').value);
    const inputField = document.getElementById('inputField').value;
    createMovie(inputField);
    form.reset();
})
