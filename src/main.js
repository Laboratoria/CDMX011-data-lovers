import data from './data/pokemon/pokemon.js';
import { getPokemonTypes } from './data.js';
import { filterTypes } from './data.js';
import { showPokemonTypes } from './data.js';


//--------------------------------Lista de type pokémon--------------------------------------


let selectorType = document.getElementById('selectorType')
    //Creando el Select que irá dentro del Div "productos"
let crearSelectType = document.createElement('select');
//crearSelectType.id = 'select';
selectorType.appendChild(crearSelectType);
const firstOption = document.createElement("option");
firstOption.value = "Tipos de Pokemon";
firstOption.text = "Tipos de Pokemon";
crearSelectType.appendChild(firstOption);

//Agregando nuestros "Options" a nuestro "Select"
//Otro forEach a los tipos de pokemon para iterar la lista, despues crea el elemento 
let pokemonTypes = getPokemonTypes()
pokemonTypes.forEach(types => {
    let type = document.createElement("option");
    type.value = types;
    type.text = types;
    crearSelectType.appendChild(type);

    //console.log(type)
})

//--------------------------------------Ordenar pokémon---------------------------------------------------------
let divOrden = document.getElementById('selectorOrder')
    //Creando el Select que irá dentro del Div "productos"
let crearSelectOrder = document.createElement('select');
//let incrementoOrder = 0;
//crearSelectOrder.id = 'select' + incrementoOrder;
divOrden.appendChild(crearSelectOrder);

//Llenando el arreglo que contendrá los "Options" de nuestro "Select"
let orderRegion = new Set();
data.pokemon.forEach(actual => {
    actual.generation.name
        //console.log(actual.generation.name)
    orderRegion.add(actual.generation.name)

})

//Agregando nuestros "Options" a nuestro "Select"
orderRegion.forEach(regionActual => {
        let region = document.createElement("option");
        //incrementoOrder++;
        region.value = regionActual;
        region.text = regionActual;
        crearSelectOrder.appendChild(region);
    })
    //-------------------------Mostrar Pokemon---------------------------------
let contenedor = document.getElementById("containerPokemon");
data.pokemon.forEach(pokemonActual => {
    let mostrarPokemon = document.createElement("div");
    //mostrarPokemon.id = pokemonActual.num + " " + pokemonActual.name;
    mostrarPokemon.setAttribute("class", "pokeDiv");
    //console.log("la clase del pokemon es:", mostrarPokemon);
    contenedor.appendChild(mostrarPokemon)

    let mostrarImg = document.createElement("img");
    mostrarImg.src = pokemonActual.img;
    mostrarImg.setAttribute("class", "pokeImg");
    //mostrarImg.className = "pokeImg";
    //console.log(mostrarImg);
    mostrarPokemon.appendChild(mostrarImg)


    let tituloImg = document.createElement("h4");
    tituloImg.innerHTML = pokemonActual.num + " " + pokemonActual.name;
    mostrarPokemon.appendChild(tituloImg);

    //console.log(contenedor);

});
document.getElementById("selectorType").addEventListener("change", (event) => {
    let data2 = filterTypes(event.target.value)
    document.getElementById("containerPokemon").innerHTML = ""

    data2.forEach(pokemonActual => {

        let mostrarPokemon = document.createElement("div");
        //mostrarPokemon.id = pokemonActual.num + " " + pokemonActual.name;
        mostrarPokemon.setAttribute("class", "pokeDiv");
        //console.log("la clase del pokemon es:", mostrarPokemon);
        contenedor.appendChild(mostrarPokemon)

        let mostrarImg = document.createElement("img");
        mostrarImg.src = pokemonActual.img;
        mostrarImg.setAttribute("class", "pokeImg");
        //mostrarImg.className = "pokeImg";
        //console.log(mostrarImg);
        mostrarPokemon.appendChild(mostrarImg)


        let tituloImg = document.createElement("h4");
        tituloImg.innerHTML = pokemonActual.num + " " + pokemonActual.name;
        mostrarPokemon.appendChild(tituloImg);

        //console.log(contenedor);

    });

})