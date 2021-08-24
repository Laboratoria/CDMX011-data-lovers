/*Manipulación del DOM*/
import data from "./data/pokemon/pokemon.js";
import { filterByType, filterByGeneration, alphabeticOrder } from "./data.js";

const allPokemon = data.pokemon;
let pokemonHtml = "";
allPokemon.forEach((eachPokemon) => {
  pokemonHtml += `<div class="container">
    <div class = "box">
    <h4>${eachPokemon.name.toUpperCase()}</h4>
    <img src="${eachPokemon.img}">
    <p>Número: ${eachPokemon.num}</p>
    <p>Peso: ${eachPokemon.size.weight}</p>
    <p>Altura:  ${eachPokemon.size.height}</p>
    </div>
    </div>`;
});
//parent element
document.getElementById("root").innerHTML = pokemonHtml;

document.getElementById("types").addEventListener("change", function () {
  const typeHtml = document.getElementById("types").value;
  const pokemonTypes = filterByType(allPokemon, typeHtml)
  let showfilter = "";
  pokemonTypes.forEach((filterType) => { 
    showfilter += `<div class="container">
        <div class = "box">
        <h4>${filterType.name.toUpperCase()}</h4>
        <img src="${filterType.img}">
        <p>Número: ${filterType.num}</p>
        <p>Peso: ${filterType.size.weight}</p>
        <p>Altura: ${filterType.size.height}</p>
                </div>
        </div>`;
  });
  document.getElementById("root").innerHTML = showfilter;
});

document.getElementById("generation").addEventListener("change", function () {
  const generationHtml = document.getElementById("generation").value;
  const pokemonGeneration = filterByGeneration(allPokemon, generationHtml);
  let showfilterG = "";
  pokemonGeneration.forEach((filterG) => {
    showfilterG += `<div class="container">
    <div class = "box">
    <h4>${filterG.name.toUpperCase()}</h4>
    <img src="${filterG.img}">
    <p>Número: ${filterG.num}</p>
    <p>Peso: ${filterG.size.weight}</p>
    <p>Altura: ${filterG.size.height}</p>
        </div>
   </div>`;
  });
  document.getElementById("root").innerHTML = showfilterG;
});

document.getElementById("orderAZ").addEventListener("click", function () {
  const orderHtml = document.getElementById("orderAZ").value;
  const orderAbc = alphabeticOrder(allPokemon, orderHtml)
   let showOrder =""
   orderAbc.forEach(sortPokemon => {
        showOrder += `<div class="container">
        <div class = "box">
        <h4>${sortPokemon.name.toUpperCase()}</h4>
        <img src="${sortPokemon.img}">
        <p>Número: ${sortPokemon.num}</p>
        <p>Peso: ${sortPokemon.size.weight}</p>
        <p>Altura: ${sortPokemon.size.height}</p>
            </div>
       </div>`;
  })
  document.getElementById("root").innerHTML = showOrder;
});


