
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