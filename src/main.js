import { example } from './data.js';
import {info} from './data.js';

import rickMorty from './data/rickandmorty/rickandmorty.js';

console.log(example, rickMorty);


//Importar el filtro de especies para mostrar en consola Humans
import { speciesFilter } from './data.js';
console.log(speciesFilter);

//Importar el acomodo de A-Z por nombre
import { sortName } from './data.js';
console.log(sortName);

//Para mostrar la imagen y nombre de los personajes
allCharacters() ;
    function allCharacters() { //declaramos funcion
        info.map((objeto)=>{ // creando nvo array a info con map
          let all = document.createElement('all'); //creando variable all
          all.classList.add("allchar"); //anade la clase all chart 
          //creamos constante template para mostrar el nombre del personaje y la imagen
          const template = `<h1 class='name'> Name: ${objeto.name}</h1> <h2 class='gender'>Gender: ${objeto.gender}</h2><h3 class='species'> Specie: ${objeto.species}</h3><h4 class='origin'> Origin: ${objeto.origin.name}</h4>
          <img src = ${objeto.image} class = 'image'> </img> `
          all.innerHTML = template; //remplaza el contenido de all por template
          document.getElementById('articles').appendChild(all); //devuelve elemento content y agrego all a content. Nodo all se adjunta a nodo padre content
          
        });
      }