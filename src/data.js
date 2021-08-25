
export const filterByType = (allPokemon, pokemonType) => {
    return allPokemon.filter(function (allPokemon) {
        return allPokemon.type.includes(pokemonType)
    })
}

export const filterByGeneration = (allPokemon, pokemonGeneration) => {
    return allPokemon.filter(function (allPokemon) {
        return allPokemon.generation.name.includes(pokemonGeneration)
    })
}

export const alphabeticOrder = (allPokemon, condition) => {
      if (condition === "A-Z") {
        return allPokemon.sort(function(a, b){
          if (a.name > b.name) {
            return 1
          } 
          if(a.name < b.name){
            return -1
          }
          return 0
        });
      } else if(condition ==="Z-A"){ 
        return allPokemon.sort((a, b) => {
          if (a.name < b.name) {
            return 1
          } 
          if (a.name > b.name) {
            return -1
            }
           return 0
        })
      }
     
    }