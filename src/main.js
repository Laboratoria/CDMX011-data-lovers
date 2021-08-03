<<<<<<< HEAD
//importar la data de pokemon.js
//import { } from './data.js';

import data from './data/pokemon/pokemon.js';

const dataPokemon = data.pokemon;
console.log(dataPokemon);


/*
import pokemon from './data/pokemon/pokemon.js';

const allPokemon = ()
pokemon.array.forEach(element => {
    
});
*/
=======
/*Manipulación del DOM*/
import data from './data/pokemon/pokemon.js';
import { filterByType } from './data.js';

const dataPokemon = data.pokemon;
console.log(dataPokemon);

/*data.forEach()
innerHTML*/
let primeraHistoria = "" 
dataPokemon.forEach(cadaPokemon =>{
primeraHistoria += primeraPantalla (cadaPokemon)
})
console.log(primeraHistoria);

function primeraPantalla (categoriaPokemon){
    return `<div class = "box">
    <h3>NOMBRE:${categoriaPokemon.name}</h3>
    <p>NÚMERO:${categoriaPokemon.num}</p>
    <p>PESO:${categoriaPokemon.size.weight}</p>
    <p>ALTURA:${categoriaPokemon.size.height}</p>
    <img src="${categoriaPokemon.img}">
    </div>`
}

document.getElementById("root").innerHTML=primeraHistoria

console.log(filterByType(dataPokemon,"fire"))

>>>>>>> 3ed83d712b8f2176dfa353dce0d4fa9d98a72f99
