// estas funciones son de ejemplo
//toda la logica

/*export const types = type.filter(x => x.type =="fire")
  console.log (fire);

export const anotherExample = () => {
  return 'OMG';
};*/


export function filterType(pokemones,typePokemon){
  let resultado=pokemones.filter(function(pokemones){
    return pokemones.type == typePokemon;
  })
  return resultado
}

//Ordenamos de Z-A
export function sortZA (pokemones){
  const sortedPokemons = pokemones.sort(function (a, b) {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1
    }
    return 0;
  });

  return sortedPokemons
}


//Ordenamos de A-Z
export function sortA (pokemones) {
  let ordenaAscend = pokemones.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return ordenaAscend
}

export function statistics (pokemones){
  let arrayKanto =0;
  let arrayJohto = 0;

   for(let i=0; i <pokemones.length; i++){
    const region = pokemones [i].generation.name;
      if (region ===  "kanto") {
        arrayKanto = arrayKanto +1;
      } else  {
        arrayJohto = arrayJohto +1;
      }
  }


 const percent1 = (arrayJohto/pokemones.length) *100
 const percent2 = (arrayKanto/pokemones.length) *100

 return [Math.round(percent1), Math.round(percent2)]
}

