import data from './data/pokemon/pokemon.js';

export const getPokemonTypes = () => {
    let typePokemon = new Set(); //inicializa la variable que sera el nuevo set de datos irrepetibles
    data.pokemon.forEach(pokemonActual => { //aqui se iteran los datos de tipo de pokemon con un forEach donde pokemonActual tiene la lista donde solo estan los tipos de pokemon,
        pokemonActual.type.forEach(types => { //Aqui vuelve a iterar la lista para sacar cada tipo de pokemon aunque la lista este repetida
            typePokemon.add(types); //Agrega la lista con los tipos de pokemon repetidos y creara una nueva agregando los tipos sin repetirlos
        })
    })
    return typePokemon
}

export const filterTypes = (pokemonType) => {
    const resultFilter = data.pokemon.filter(pokemon => {
        if (pokemon.type.includes(pokemonType)) {
            return true
        }
    })
    return resultFilter
}

export const showPokemonTypes = () => {
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
}