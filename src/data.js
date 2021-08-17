
//Fitrar por Status
export function filterStatus(data, type) {
  let result = data.filter(character => character.status == type)
  return result
}

//Filtar por Género
export function filterGender(data, type) {
  let result = data.filter(character => character.gender == type)
  return result
}

//Filtrar por Especie
export function filterSpecie(data, type) {
  let result = data.filter(character => character.species == type)
  return result
}

 export function filterByName(data, nombre){
  let result = data.filter(element => element.name.toLowerCase().indexOf(nombre) !==-1)
   return result
  }


//Filtrar por Alfabeto

export function filterName(data, condition) {
  let result = ""
  if (condition === "A-Z") {
    result = data.sort(function(a, b){
      if (a.name > b.name) {
        return 1
      } if(a.name<b.name){
        return -1
      }
      return 0
      
    });
  } else if(condition ==="Z-A"){ //para ordenar de Z-A
    result = data.sort((a, b) => {
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

