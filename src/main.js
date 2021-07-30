import data from './data/pokemon/pokemon.js';
import {
    getPokemonTypes,
    filterTypes,
    getPokemonRegion,
    filterRegion,
    sortData,
} from './data.js';


let filteredData = data.pokemon;
//----------Diseño Header Responsive----------------------------
jQuery('document').ready(function ($) {
    let menuBtn = $('.menu-icon'),
        menu = $('.navigation ul');
    menuBtn.click(function () {
        if (menu.hasClass("show")) {
            menu.removeClass('show')
        } else { menu.addClass('show') }

    });
});

//-------- Creacion de div para mostrar los pokemon en la pagina inicial---------

const createPokemonTypes = (dataPokemon) => {

    /*Cramos variable para el contenedor de todos los div pokemon*/
    let contenedor = document.querySelector("#containerPokemon");
    /*Creamos div individual, el cuál guardará a un solo pokémon */
    let mostrarPokemon = document.createElement("div");
    mostrarPokemon.setAttribute("class", "pokeDiv");
    contenedor.appendChild(mostrarPokemon);

    /*Mostrar Imágen*/
    let mostrarImg = document.createElement("img");
    mostrarImg.src = dataPokemon.img;
    mostrarImg.setAttribute("class", "pokeImg");
    mostrarPokemon.appendChild(mostrarImg);

    /*Creamos div que contenga solo la información del pokemon individual*/
    let pokemonInfo = document.createElement("div");
    pokemonInfo.setAttribute("class", "pokeInfo");

    /*Número y Nombre */
    let tituloImg = document.createElement("h4");
    let namePokemon = dataPokemon.name;
    let initialName = namePokemon.charAt(0).toUpperCase();
    let restName = namePokemon.slice(1);
    let resultName = initialName + restName;
    tituloImg.innerHTML = dataPokemon.num + " " + resultName;
    pokemonInfo.appendChild(tituloImg);

    /*Huevos*/
    let egg = document.createElement("p");
    let eggPokemon = dataPokemon.egg;
    egg.innerHTML = (`<strong>Egg:</strong> ${eggPokemon}`);;
    pokemonInfo.appendChild(egg);

    /*Special Attack*/
    let tituloUl = document.createElement("p");
    pokemonInfo.appendChild(tituloUl);
    tituloUl.innerHTML = "<strong>Special Attack:</strong>";
    let info = document.createElement("p");
    for (let i = 0; i < dataPokemon["special-attack"].length; i++) {
        let attack = dataPokemon["special-attack"][i].name;
        let text = document.createTextNode(`${attack}`);
        info.appendChild(text);
    }
    pokemonInfo.appendChild(info);





    mostrarPokemon.appendChild(pokemonInfo);
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
const sortAscendingNum = document.createElement("option");
sortAscendingNum.value = "0 a 251";
sortAscendingNum.text = "0 a 251";
createSelectSort.appendChild(sortAscendingNum);
const sortDescendingNum = document.createElement("option");
sortDescendingNum.value = "251 a 0";
sortDescendingNum.text = "251 a 0";
createSelectSort.appendChild(sortDescendingNum);
const sortAscendingName = document.createElement("option");
sortAscendingName.value = "Nombre ascendente";
sortAscendingName.text = "Nombre ascendente";
createSelectSort.appendChild(sortAscendingName);
const sortDescendingName = document.createElement("option");
sortDescendingName.value = "Nombre descendente";
sortDescendingName.text = "Nombre descendente";
createSelectSort.appendChild(sortDescendingName);

document.getElementById("selectorSort").addEventListener("change", (event) => {
    const userOption = event.target.value;
    filteredData = sortData(filteredData, userOption);
    document.getElementById("containerPokemon").innerHTML = "";
    filteredData.forEach(pokemonActual => {
        createPokemonTypes(pokemonActual);
    });
})