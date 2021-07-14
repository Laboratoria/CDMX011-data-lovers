import { maping } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(maping(data));

var posters = [];
 
for (var i = 0, max = data.length; i < max; i += 1) {
 
    posters.push(data[i].films.poster);
    

}

console.log(posters)