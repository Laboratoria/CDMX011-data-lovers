/*import { example } from './data.js';

import data from './data/pokemon/pokemon.js';


console.log(example, data);*/

/* Leerlo con fetch
fetch('http://localhost:5000/data/pokemon/pokemon.json')
    .then(res => res.json())
    .then(pokemon => {
        console.log(pokemon.pokemon);

    })
    .catch(e => {
        console.log("error", e)
    })
*/

import data from './data/pokemon/pokemon.js';
console.log(data.pokemon[0].type);//Accedemos al primer pokemon y su tipo
