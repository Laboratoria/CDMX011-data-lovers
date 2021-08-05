import { posters} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

let Adress = [20];
Adress = posters(data);




for( let i = 0; i <20; i++){ 
    document.getElementById("film" + i).src=Adress[i];
}
/*console.log(posters, data);
console.log(data.films[2].title);
console.log(data.films[0].people[1].name);
console.log(data.films[17].title);
console.log(data.films[17].locations[0].name);
console.log(data.films[17].locations[0].residents[0]);
console.log(data.films[5].vehicles[1].name);
*/

for(let i=0 ; i<20 ; i++){
    if(data.films[i].director === "Hayao Miyazaki"){
        console.log(data.films[i].title);
    }else{ continue; }
}