/*Manipulación del DOM*/
import data from "./data/pokemon/pokemon.js";
import { filterByType } from "./data.js";
import {filterByRarity } from "./data.js";

const dataPokemon = data.pokemon;

// Primera pantalla donde muestra todos los pokemones
let pokemonHtml = "";

dataPokemon.forEach((eachPokemon) => {
  pokemonHtml += `<div class = "box">
    <h3>NOMBRE:${eachPokemon.name}</h3>
    <p>NÚMERO:${eachPokemon.num}</p>
    <p>PESO:${eachPokemon.size.weight}</p>
    <p>ALTURA:${eachPokemon.size.height}</p>
    <img src="${eachPokemon.img}">
    </div>`;
});
//parent element
document.getElementById("root").innerHTML = pokemonHtml;

//data.forEach
//innerHTML

//Filtrado por tipo de pokemón
document.getElementById("types").addEventListener("change", function () {
  const typeHtml = document.getElementById("types").value;
  const pokemonType = filterByType(dataPokemon, typeHtml);

  let showfilter = "";
  pokemonType.forEach((filterType) => {
    showfilter += `<div class = "box">
        <h3>NOMBRE:${filterType.name}</h3>
        <p>NÚMERO:${filterType.num}</p>
        <p>PESO:${filterType.size.weight}</p>
        <p>ALTURA:${filterType.size.height}</p>
        <img src="${filterType.img}">
        </div>`;
  });

  document.getElementById("root").innerHTML = showfilter;
});

/*const selectType = document.querySelector('.filter')

selectType.addEventListener('change', (event) => {
    const pokemonFilter = filterByType(dataPokemon,event.target.value);
    const typePokemon = pokemonFilter.map((categoryPokemon) =>

    `<div class = "box">
    <h3>NOMBRE:${categoryPokemon.name}</h3>
    <p>NÚMERO:${categoryPokemon.num}</p>
    <p>PESO:${categoryPokemon.size.weight}</p>
    <p>ALTURA:${categoryPokemon.size.height}</p>
    <img src="${categoryPokemon.img}">
    </div>`
    )

    document.getElementById("root").innerHTML=typePokemon

});*/

document.getElementById("rarity").addEventListener("change", function () {
  const rarityHtml = document.getElementById("rarity").value;
  const pokemonRarity = filterByRarity(dataPokemon, rarityHtml);

  let showfilterR = "";
  pokemonRarity.forEach((filterRarity) => {
    showfilterR += `<div class = "box">
        <h3>NOMBRE:${filterRarity.name}</h3>
        <p>NÚMERO:${filterRarity.num}</p>
        <p>PESO:${filterRarity.size.weight}</p>
        <p>ALTURA:${filterRarity.size.height}</p>
        <img src="${filterRarity.img}">
        </div>`;
  });

  document.getElementById("root").innerHTML = showfilterR;
});