import { maping } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

var films = document.getElementById('films')
const movies_button = document.getElementById('movies_button');
const home = document.getElementById('home')
const home_button = document.getElementById('home_button')


home_button.addEventListener('click', () => {
    home.style.display = "flex";
    films.style.display = "none";
})

let moviesMaped = maping(data)
films.innerHTML = moviesMaped

movies_button.addEventListener('click', () => {
    home.style.display = "none";
    films.style.display = "flex";
})