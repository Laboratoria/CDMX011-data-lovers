/*Funciones de ejemplo
export const pokemonType = type.filter(x =>) => {
    return 'example';
};

export const anotherExample = () => {
    return 'OMG';
};
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

export function filterByRarity(dataPokemon, pokemonRarity) {
    let result = dataPokemon.filter((pokemons) => pokemons.pokemonrarity == pokemonRarity);
    return result;
}
