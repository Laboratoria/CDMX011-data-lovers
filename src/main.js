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

