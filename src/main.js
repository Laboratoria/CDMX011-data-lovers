import data from './data/pokemon/pokemon.js';

import {
    getPokemonTypes,
    filterTypes,
    createPokemonTypes,
    getPokemonRegion,
    filterRegion,
} from './data.js';
//import { types } from '@babel/core';


//--------------------------------Creación de lista Type pokémon--------------------------------------

let selectorType = document.getElementById('selectorType')
let crearSelectType = document.createElement('select'); //Creando el Select que irá dentro del Div "productos"
selectorType.appendChild(crearSelectType);
const firstOption = document.createElement("option");
firstOption.value = "Todos los Pokemon";
firstOption.text = "Todos los Pokemon";
crearSelectType.appendChild(firstOption);

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
    //-------------------------Mostrar Pokemon---------------------------------
    //let showPokemon = data.pokemon.forEach()
data.pokemon.forEach(pokemonActual => {
    const showPokemon = createPokemonTypes(pokemonActual);

});

document.getElementById("selectorType").addEventListener("change", (event) => {
    let data2 = filterTypes(event.target.value)
    document.getElementById("containerPokemon").innerHTML = ""

    data2.forEach(pokemonActual => {
        const showPokemon = createPokemonTypes(pokemonActual);
    });

})

document.getElementById("selectorRegion").addEventListener("change", (event) => {
    let data2 = filterRegion(event.target.value)
    document.getElementById("containerPokemon").innerHTML = ""

    data2.forEach(pokemonActual => {
        const showPokemon = createPokemonTypes(pokemonActual);
    });

})