/*Manipulación de datos a traves de arreglos y objetos (lógica)*/
// estas funciones son de ejemplo
/*export const pokemonType = type.filter(x =>) => {
    return 'example';
};

export const anotherExample = () => {
    return 'OMG';
};

/*---Posible filtro para obtener tipos de pokemones---
let allPokemon = [{data.pokemon}];
let pokemonType == type.filter(function(type){
    return pokemonType == "pokemon-type"; });
console.log(pokemon-type);
})
*/


/*La función filterByType recibe en los () los datos del pokemon.js y rebibe los tipos de pokemon (pokemonType)
ejecutamos el filtrado de los pokemones en dataPokemon.filter y nos retornará un resultado, ese resultado lo 
declaramos guardandolo en la variable let result y la retornamos para que nos de el filtrado
filterByType espera todos los pokemones y despues el tipo

pokemonType lo reutilizamos 
*/

/*export function filterByType(dataPokemon, pokemonType) {
    let result = dataPokemon.filter(function (dataPokemon) {
        return dataPokemon.type == pokemonType;
    })
    return result
}*/

export function filterByType(dataPokemon, pokemonType) {
    let result = dataPokemon.filter((pokemons) => pokemons.type == pokemonType);
    return result;
}

/*export function filterByGeneration(dataPokemon, pokemonGeneration) {
    let result = dataPokemon.filter(function (dataPokemon) {
        return dataPokemon.generation.name == pokemonGeneration;
    });
    return result;
}*/
