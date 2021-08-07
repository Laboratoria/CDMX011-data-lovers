//aqui controlan todo el dom
import data from './data/pokemon/pokemon.js';
import { filterType } from './data.js';



const pokemones=data.pokemon;

let htmlfinal=""

pokemones.forEach(unoauno=>{
htmlfinal+=generadordehtml(unoauno)
})

function generadordehtml(pokemoncito){
  return `<div class="box">
   <img src="${pokemoncito.img}" id="imgPoke">
   <h4>${pokemoncito.num}</h4>
   <h2></h2>
   <h1>${pokemoncito.name}</h1>
   <h3></h3>
   <h4>${pokemoncito.generation.name}</h4>
   <p><b>Type:  </b><br>${pokemoncito.type}</p>
   <p><b>Resistant:  </b><br>${pokemoncito.resistant} </p>
   <p><b>Weaknesses:  </b><br>${pokemoncito.weaknesses} </p>
   </div>`
}

document.getElementById("root").innerHTML=htmlfinal


//Aqui filtramos por tipo
const changeType = document.querySelector('.filter');

changeType.addEventListener('change', (event) => {
    const pokemonsFilter= filterType(pokemones,event.target.value)
    const htmlPokemons= pokemonsFilter.map((pokemoncito)=>
    `<div class="box">
    <img src="${pokemoncito.img}" id="imgPoke">
    <h4>${pokemoncito.num}</h4>
    <h1>${pokemoncito.name}</h1>
    <h4>${pokemoncito.generation.name}</h4>
    <p><b>Type:  </b><br>${pokemoncito.type}</p>
    <p><b>Resistant:  </b><br>${pokemoncito.resistant} </p>
    <p><b>Weaknesses:  </b><br>${pokemoncito.weaknesses} </p>
     </div>`)

    document.getElementById("root").innerHTML=htmlPokemons
});
//traemos el arreglo nombres
let arrNames = pokemones.filter(pokemones => pokemones.name);
//Ordenamos de forma Z-A
let ordenDes = arrNames.reverse(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  console.log(ordenDes);

//Ordenamos de forma A-Z
  let ordenaAscend = arrNames.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  console.log(ordenaAscend);

// levamos a boton
const orderAsc = document.getElementById('order');
orderAsc.addEventListener('change', (event) => {
  const save = document.getElementById('root');
  if (value === 'A-Z') {
    const ascendente = ordenaAscend;
    const listaAscendente = ascendente.map((pokemoncito) => 
    `<div class="box">
    <img src="${pokemoncito.img}" id="imgPoke">
    <h4>${pokemoncito.num}</h4>
    <h1>${pokemoncito.name}</h1>
    <h4>${pokemoncito.generation.name}</h4>
    <p><b>Type:  </b><br>${pokemoncito.type}</p>
    <p><b>Resistant:  </b><br>${pokemoncito.resistant} </p>
    <p><b>Weaknesses:  </b><br>${pokemoncito.weaknesses} </p>
     </div>
    `)
    save.innerHTML = listaAscendente

  }
});


  
