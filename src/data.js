//Filtrado por tipo.
export function filterType(pokemones,typePokemon){
  let resultado=pokemones.filter(function(pokemones){
                  return pokemones.type == typePokemon;
                 })
  return resultado
}






