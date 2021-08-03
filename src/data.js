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

/*import data from './data/pokemon/pokemon.js';
console.log()*/

export function filterByType(dataPokemon, pokemonType){
    let result = dataPokemon.filter(function(dataPokemon){
                    return dataPokemon.type == pokemonType;
    })
    return result
}

