import data from './data/pokemon/pokemon.js';

export const getPokemonTypes = () => {
    let typePokemon = new Set(); //inicializa la variable que sera el nuevo set de datos irrepetibles
    data.pokemon.forEach(pokemonActual => { //aqui se iteran los datos de tipo de pokemon con un forEach donde pokemonActual tiene la lista donde solo estan los tipos de pokemon,
        pokemonActual.type.forEach(types => { //Aqui vuelve a iterar la lista para sacar cada tipo de pokemon aunque la lista este repetida
            typePokemon.add(types); //Agrega la lista con los tipos de pokemon repetidos y creara una nueva agregando los tipos sin repetirlos
        })
    })
    return typePokemon;
}

export const getPokemonRegion = () => {
    let orderRegion = new Set();
    data.pokemon.forEach(actualPokemon => {
        actualPokemon.generation.name;
        //console.log(actual.generation.name)
        orderRegion.add(actualPokemon.generation.name);
    })
    return orderRegion;
}

export const filterTypes = (pokemonType) => {
    const resultFilter = data.pokemon.filter(pokemon => {
        if (pokemon.type.includes(pokemonType)) {
            return true;
        }
    })
    return resultFilter;
}

export const filterRegion = (pokemonActual) => {
    const resultRegion = data.pokemon.filter(pokemon => {
        if (pokemon.generation.name.includes(pokemonActual)) {
            return true;
        }
    })
    return resultRegion;
}

export const createPokemonTypes = (pokemonActual) => {
    let contenedor = document.querySelector("#containerPokemon");
    let mostrarPokemon = document.createElement("div");
    mostrarPokemon.setAttribute("class", "pokeDiv");
    //console.log("la clase del pokemon es:", mostrarPokemon);
    contenedor.appendChild(mostrarPokemon);

    let mostrarImg = document.createElement("img");
    mostrarImg.src = pokemonActual.img;
    mostrarImg.setAttribute("class", "pokeImg");
    //mostrarImg.className = "pokeImg";
    //console.log(mostrarImg);
    mostrarPokemon.appendChild(mostrarImg);

    let tituloImg = document.createElement("h4");
    let namePokemon = pokemonActual.name;
    let initialName = namePokemon.charAt(0).toUpperCase();
    let restName = namePokemon.slice(1);
    let resultName = initialName + restName;
    /*Mostramos el número + nombre en pantalla*/
    tituloImg.innerHTML = pokemonActual.num + " " + resultName;
    mostrarPokemon.appendChild(tituloImg);
    //console.log(contenedor);

};