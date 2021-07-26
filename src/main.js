import data from './data/pokemon/pokemon.js';
import {
    getPokemonTypes, filterTypes,
    createPokemonTypes, getPokemonRegion,
    filterRegion, sortPokemon
} from './data.js';

let filteredData = data.pokemon;
//--------------------------------Creación de lista Type pokémon--------------------------------------

let selectorType = document.getElementById('selectorType')
let crearSelectType = document.createElement('select'); //Creando el Select que irá dentro del Div "productos"
selectorType.appendChild(crearSelectType);
const firstOption = document.createElement("option");
firstOption.value = "Tipos de Pokemon";
firstOption.text = "Tipos de Pokemon";
crearSelectType.appendChild(firstOption);
//document.getElementById("selectorType").addEventListener

let pokemonTypes = getPokemonTypes() //Agregando nuestros "Options" a nuestro "Select"
pokemonTypes.forEach(types => { //Otro forEach a los tipos de pokemon para iterar la lista, despues crea el elemento
    let type = document.createElement("option");
    type.value = types;
    type.text = types;
    crearSelectType.appendChild(type);
})

//--------------------------------------Creación de Ordenar pokémon por generación---------------------------------------------------------
let selectorRegion = document.getElementById("selectorRegion")
let createSelectRegion = document.createElement('select'); //Creando el Select que irá dentro del Div "productos"
selectorRegion.appendChild(createSelectRegion);

let pokemonRegion = getPokemonRegion()
//Agregando nuestros "Options" a nuestro "Select"
pokemonRegion.forEach(regionActual => {
    let region = document.createElement("option");
    region.value = regionActual;
    region.text = regionActual;
    createSelectRegion.appendChild(region);
})
//--------------------------------Creación de ordenar Sort--------------------------------------

let selectorSort = document.getElementById('selectorSort')
let crearSelectSort = document.createElement('select');
selectorSort.appendChild(crearSelectSort);
const optionSortAscendent = document.createElement("option");
optionSortAscendent.value = "Orden ascendente";
optionSortAscendent.text = "Orden ascendente";
crearSelectSort.appendChild(optionSortAscendent);

const optionSortDescendent = document.createElement("option");
optionSortDescendent.value = "Orden descendente";
optionSortDescendent.text = "Orden descendente";
crearSelectSort.appendChild(optionSortDescendent);

document.getElementById("selectorSort").addEventListener("change", (event) => {
    const selectUser = event.target.value;

    filteredData = sortPokemon(filteredData, selectUser);
    document.getElementById("containerPokemon").innerHTML = "";

    filteredData.forEach(pokemonActual => {
        createPokemonTypes(pokemonActual);

    });

})





//-------------------------Mostrar Pokemon---------------------------------
//let showPokemon = data.pokemon.forEach()
filteredData.forEach(pokemonActual => {
    createPokemonTypes(pokemonActual);

});

document.getElementById("selectorType").addEventListener("change", (event) => {
    let data2 = filterTypes(event.target.value)
    document.getElementById("containerPokemon").innerHTML = ""

    data2.forEach(pokemonActual => {
        createPokemonTypes(pokemonActual);
    });

})

document.getElementById("selectorRegion").addEventListener("change", (event) => {
    let data2 = filterRegion(event.target.value)
    document.getElementById("containerPokemon").innerHTML = ""

    data2.forEach(pokemonActual => {
        createPokemonTypes(pokemonActual);
    });

})