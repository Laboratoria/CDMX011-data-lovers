import data from './data/pokemon/pokemon.js';

//--------------------------------Lista de type pokémon--------------------------------------
let types = document.getElementById('selectorType')
    //Creando el Select que irá dentro del Div "productos"
let crearSelectType = document.createElement('select');
let incremento = 0;
crearSelectType.id = 'select' + incremento;
types.appendChild(crearSelectType);

//inicializa la variable que sera el nuevo set de datos irrepetibles
let typePokemon = new Set();
//aqui se iteran los datos de tipo de pokemon con un forEach donde pokemonActual tiene la lista donde solo estan los tipos de pokemon, 
data.pokemon.forEach(pokemonActual => {
    //console.log(pokemonActual.type)
    //Aqui vuelve a iterar la lista para sacar cada tipo de pokemon aunque la lista este repetida
    pokemonActual.type.forEach(tipos => {
        //console.log(tipos);
        //Agrega la lista con los tipos de pokemon repetidos y creara una nueva agregando los tipos sin repetirlos
        typePokemon.add(tipos);
    })
})
console.log(typePokemon);

//Agregando nuestros "Options" a nuestro "Select"
//Otro forEach a los tipos de pokemon para iterar la lista, despues crea el elemento 
typePokemon.forEach(tipos => {
        let type = document.createElement("option");
        incremento++;
        type.value = tipos;
        type.text = tipos;
        crearSelectType.appendChild(type);
    })
    /*for (let i = 0; i < typePokemon.length; i++) {
        let type = document.createElement("option");
        incremento++;
        type.value = typePokemon[i];
        type.text = typePokemon[i];
        crearSelectType.appendChild(type);
    }*/
    //--------------------------------------Ordenar pokémon---------------------------------------------------------
let divOrden = document.getElementById('selectorOrder')
    //Creando el Select que irá dentro del Div "productos"
let crearSelectOrder = document.createElement('select');
let incrementoOrder = 0;
crearSelectOrder.id = 'select' + incrementoOrder;
divOrden.appendChild(crearSelectOrder);

//Llenando el arreglo que contendrá los "Options" de nuestro "Select"
let orderRegion = new Set();
data.pokemon.forEach(actual => {
    actual.generation.name
    console.log(actual.generation.name)
    orderRegion.add(actual.generation.name)

})

//Agregando nuestros "Options" a nuestro "Select"
orderRegion.forEach(regionActual => {
    let region = document.createElement("option");
    incrementoOrder++;
    region.value = regionActual;
    region.text = regionActual;
    crearSelectOrder.appendChild(region);
})