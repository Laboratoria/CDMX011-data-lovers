
// La función filterByType recibe en los () los datos del pokemon.js y rebibe los tipos de pokemon (pokemonType)
// ejecutamos el filtrado de los pokemones en dataPokemon.filter y nos retornará un resultado, ese resultado lo 
// declaramos guardandolo en la variable let result y la retornamos para que nos de el filtrado
// filterByType espera todos los pokemones y despues el tipo

// pokemonType lo reutilizamos 

export function filterByType(allPokemon, pokemonType) {
    return allPokemon.filter(function (allPokemon) {
        return allPokemon.type.includes(pokemonType)
    })
}


export function filterByGeneration(allPokemon, pokemonGeneration) {
  return allPokemon.filter(function (allPokemon) {
      return allPokemon.generation.name.includes(pokemonGeneration)
  })
}


export function alphabeticOrder(allPokemon, condition) {
    let result = ""
    if (condition === "A-Z") {
      result = allPokemon.sort(function(a, b){
        if (a.name > b.name) {
          return 1
        } if(a.name<b.name){
          return -1
        }
        return 0
        
      });
    } else if(condition ==="Z-A"){ 
      result = allPokemon.sort((a, b) => {
        if (a.name < b.name) {
          return 1
        } if (a.name>b.name) {
          return -1
          }
          return 0
      })
    }
    return result
  }



//let orderResult = " "
// if (pokemonOrder === "Z-A") {
//     orderResult = allPokemon.sort((a, b) => {
//         if(a < b) {
//           return -1;
//           }
//           else {
//             return 1;
//         }
//     });


// export function filterByType(allPokemon, pokemonType) {
//     let result = allPokemon.filter(() => allPokemon.type == pokemonType);
//     return result;
// }

// export function filterByRarity(dataPokemon, pokemonType) {
//     let result = dataPokemon.filter((pokemons) => pokemons.pokemonrarity == pokemonType);
//     return result;
// }
//