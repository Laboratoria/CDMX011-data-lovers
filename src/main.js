import data from './data/pokemon/pokemon.js';
import {
    getPokemonTypes,
    filterTypes,
    getPokemonRegion,
    filterRegion,
    sortData,
} from './data.js';
//import { types } from '@babel/core';

let filteredData = data.pokemon;
//----------------- Creacion de div para mostrar los pokemon en la pagina inicial------------------
const createPokemonTypes = (dataPokemon) => {
    let contenedor = document.querySelector("#containerPokemon");
    let mostrarPokemon = document.createElement("div");
    mostrarPokemon.setAttribute("class", "pokeDiv");
    contenedor.appendChild(mostrarPokemon);

    let mostrarImg = document.createElement("img");
    mostrarImg.src = dataPokemon.img;
    mostrarImg.setAttribute("class", "pokeImg");
    //mostrarImg.className = "pokeImg";
    mostrarPokemon.appendChild(mostrarImg);

    let tituloImg = document.createElement("h4");
    let namePokemon = dataPokemon.name;
    let initialName = namePokemon.charAt(0).toUpperCase();
    let restName = namePokemon.slice(1);
    let resultName = initialName + restName;
    tituloImg.innerHTML = dataPokemon.num + " " + resultName; //Mostramos el número + nombre en pantalla
    mostrarPokemon.appendChild(tituloImg);
};
//--------------------------------Creación de lista Type pokémon--------------------------------------

let selectorType = document.getElementById('selectorType')
let createSelectType = document.createElement('select'); //Creando el Select que irá dentro del Div "productos"
selectorType.appendChild(createSelectType);
const firstOption = document.createElement("option");
firstOption.value = "Todos los Pokemon";
firstOption.text = "Todos los Pokemon";
createSelectType.appendChild(firstOption);


let pokemonTypes = getPokemonTypes(filteredData) //Agregando nuestros "Options" a nuestro "Select"
pokemonTypes.forEach(types => { //Otro forEach a los tipos de pokemon para iterar la lista, despues crea el elemento
    let type = document.createElement("option");
    type.value = types;
    type.text = types;
    createSelectType.appendChild(type);
})
document.getElementById("selectorType").addEventListener("change", (event) => {
    //location.reload();
    if (event.target.value == "Todos los Pokemon") {
        location.reload()
    } else {
        filteredData = filterTypes(event.target.value);
        document.getElementById("containerPokemon").innerHTML = "";

        filteredData.forEach(pokemonActual => {
            createPokemonTypes(pokemonActual);
        });
    }

})

//--------------------------------------Creación de Ordenar pokémon por generación---------------------------------------------------------
let selectorRegion = document.getElementById("selectorRegion")
let createSelectRegion = document.createElement('select'); //Creando el Select que irá dentro del Div "productos"
selectorRegion.appendChild(createSelectRegion);

let pokemonRegion = getPokemonRegion(filteredData)
    //Agregando nuestros "Options" a nuestro "Select"
pokemonRegion.forEach(regionActual => {
    let region = document.createElement("option");
    region.value = regionActual;
    region.text = regionActual;
    createSelectRegion.appendChild(region);
})
document.getElementById("selectorRegion").addEventListener("change", (event) => {
        //location.reload();
        filteredData = filterRegion(event.target.value);
        document.getElementById("containerPokemon").innerHTML = "";

        filteredData.forEach(pokemonActual => {
            createPokemonTypes(pokemonActual);
        });

    })
    //-------------------------Mostrar Pokemon--------------------------------

filteredData.forEach(pokemonActual => {
    createPokemonTypes(pokemonActual);

});
//---------------------Ordenar Ascendente-Descendente-------------------
let selectorSort = document.getElementById("selectorSort")
let createSelectSort = document.createElement('select'); //Creando el Select que irá dentro del Div "productos"
selectorSort.appendChild(createSelectSort);
const sortAscending = document.createElement("option");
sortAscending.value = "Orden ascendente";
sortAscending.text = "Orden ascendente";
createSelectSort.appendChild(sortAscending);
const sortDescending = document.createElement("option");
sortDescending.value = "Orden descendente";
sortDescending.text = "Orden descendente";
createSelectSort.appendChild(sortDescending);

document.getElementById("selectorSort").addEventListener("change", (event) => {
    const userOption = event.target.value;
    filteredData = sortData(filteredData, userOption);
    document.getElementById("containerPokemon").innerHTML = "";
    filteredData.forEach(pokemonActual => {
        createPokemonTypes(pokemonActual);
    });
})