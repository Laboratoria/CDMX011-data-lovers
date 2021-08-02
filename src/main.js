/*Manipulación del DOM*/
import { example } from './data.js';

import data from './data/pokemon/pokemon.js';
/*data.forEach()
innerHTML*/

const pokemon = data.pokemon;
console.log(pokemon);

let allPokemon = "" 
pokemon.forEach(cadaPokemon =>{
primeraHistoria += primeraPantalla (cadaPokemon)
})


function primeraPantalla (categoriaPokemon){
    return `<div class = "box">
        <img src="${}">
    <h1>NOMBRE:${categoriaPokemon.name}</h1>
    <p>NÚMERO:</p>
    <p>PESO/ALTURA:</p>
    <p>ATAQUE/DEFENSA:</p>
    </div>`
}

document.getElementByID("root").innerHTML=primeraHistoria



