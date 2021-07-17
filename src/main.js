import data from './data/pokemon/pokemon.js';
console.log(data.pokemon[0].name); //Accedemos al primer pokemon y su tipo


//--------------------------------Lista de type pokémon--------------------------------------


let bloque = document.getElementById('selectorType')
    //Creando el Select que irá dentro del Div "productos"
let crearSelectType = document.createElement('select');
let incremento = 0;
crearSelectType.id = 'select' + incremento;
bloque.appendChild(crearSelectType);

//Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua.

//Llenando el arreglo que contendrá los "Options" de nuestro "Select"
/*const typePokemon = [
    "Todos",
    "Fuego",
    "Agua",
    "Roca",
    "Normal",
    "Hielo",
    "Eléctrico",
    "Fantasma",
    "Hada",
    "Psíquico",
    "Tierra",
    "Volador",
    "Bicho",
    "Planta",
    "Veneno",
    "Acero",
    "Lucha",
    "Dragon"
];*/
let typePokemon = new Set();

data.pokemon.forEach(pokemonActual => {
    //console.log(pokemonActual.type)
    pokemonActual.type.forEach(tipos => {
        //console.log(tipos);
        typePokemon.add(tipos);
        //console.log(pokemonType);
    })
})
console.log(typePokemon);

//Agregando nuestros "Options" a nuestro "Select"
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

//Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua.

//Llenando el arreglo que contendrá los "Options" de nuestro "Select"
const orderOptions = [
    "Número",
    "Ascendente",
    "Descendente"
];


//Agregando nuestros "Options" a nuestro "Select"
for (let j = 0; j < orderOptions.length; j++) {
    let organiza = document.createElement("option");
    incrementoOrder++;
    organiza.value = orderOptions[j];
    organiza.text = orderOptions[j];
    crearSelectOrder.appendChild(organiza);
}