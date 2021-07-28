import rickMorti from './data/rickandmorty/rickandmorty.js';


export let info= rickMorti.results;

//const sortSp = Array.from(info).sort((a, b) => { if (a.species.toLowerCase() < b.species.toLowerCase()) return -1 });
//export const sortSpecies = info.sort((a, b) => {
  //if(a.species.toLowerCase() < b.species.toLowerCase()) return -1 });
//console.log(sortSpecies);
  
export const sortName = info.sort((a, b) => {
  if(a.name.toLowerCase() < b.name.toLowerCase()) return -1 });
//console.log(sortName);

//export const speciesFilter= (speciesSelected)=>{
  // let species= info.filter (kindofspecie=>kindofspecie.species===speciesSelected)
//return species
//}

export const speciesFilter= info.filter(function(specieSelected){
  return specieSelected.species=== "Human";

})

export const example = () => {
  return 'example';
 };
 // estas funciones son de ejemplo
 //export const anotherExample = () => {
 //  return 'OMG';
 //};
 //export const pictures = info.filter((image) => {
  //return image;
//});