// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};



//Fitrar por Status
export function filterStatus(data,tipo){
  let resultado = data.filter(character=>character.status==tipo)
  return resultado
}

//Filtar por Género
export function filterGender(data,tipo){
  let resultado = data.filter(character=>character.gender==tipo)
  return resultado
}

//Filtrar por Especie
export function filterSpecie(data,tipo){
  let resultado = data.filter(character=>character.species==tipo)
  return resultado
}

//Filtrar por Alfabeto
/* 
export const filterName = (data, order) => {
  let resultado =data.sort((a, b) => {
          if (a.name < b.name) {
              return -1;
          } else if (a.name> b.name) {
              return 1;
          } else {
              return 0;
          }}}
      */
