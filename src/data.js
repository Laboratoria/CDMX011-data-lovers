import data from './data/pokemon/pokemon.js';

const getPokemonTypes = (filteredData) => {
    const typePokemon = new Set(); //inicializa la variable que sera el nuevo set de datos irrepetibles
    filteredData.forEach(pokemonActual => { //aqui se iteran los datos de tipo de pokemon con un forEach donde pokemonActual tiene la lista donde solo estan los tipos de pokemon,
        pokemonActual.type.forEach(types => { //Aqui vuelve a iterar la lista para sacar cada tipo de pokemon aunque la lista este repetida
            typePokemon.add(types); //Agrega la lista con los tipos de pokemon repetidos y creara una nueva agregando los tipos sin repetirlos
        })
    })
    return typePokemon
}

const getPokemonRegion = (filteredData) => {
    const orderRegion = new Set();
    filteredData.forEach(actualPokemon => {
        actualPokemon.generation.name;
        orderRegion.add(actualPokemon.generation.name);
    })
    return orderRegion;
}

const filterTypes = (pokemonType) => {
    const resultFilter = data.pokemon.filter(pokemon => {
        if (pokemon.type.includes(pokemonType)) {
            return true;
        }
    })
    return resultFilter;
}

const filterRegion = (pokemonActual) => {
    const resultRegion = data.pokemon.filter(pokemon => {
        if (pokemon.generation.name.includes(pokemonActual)) {
            return true;
        }
    })
    return resultRegion;
}

const sortData = (filteredData, userOption) => {
    if (userOption == "0 a 251") {
        filteredData.sort(function(a, b) {
            if (a.num < b.num) { return -1; }
            if (a.num > b.num) { return 1; }
            return 0;
        })
    } else if (userOption == "251 a 0") {
        filteredData.sort(function(a, b) {
            if (a.num < b.num) { return 1; }
            if (a.num > b.num) { return -1; }
            return 0;
        })
    } else if (userOption == "Nombre ascendente") {
        filteredData.sort(function(a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        })
    } else if (userOption == "Nombre descendente") {
        filteredData.sort(function(a, b) {
            if (a.name < b.name) { return 1; }
            if (a.name > b.name) { return -1; }
            return 0;
        })
    }

    return filteredData;
}



export { getPokemonRegion, filterTypes, filterRegion, getPokemonTypes, sortData };