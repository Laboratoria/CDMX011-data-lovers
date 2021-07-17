import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
//import { example } from './data.js';
//console.log(data.pokemon[0].type)

let pokemonType = new Set();

data.pokemon.forEach(pokemonActual => {
    //console.log(pokemonActual.type)
    pokemonActual.type.forEach(tipos => {
        //console.log(tipos);
        pokemonType.add(tipos);
        //console.log(pokemonType);
    })
})
console.log(pokemonType);



/*let testSet = new Set();

testSet.add(0)
testSet.add(0)
testSet.add(1)
console.log(testSet)

for (let a = 0; a <= data.pokemon.length; a++) {
    console.log(a)
    console.log(data.pokemon[a].type)
}*/